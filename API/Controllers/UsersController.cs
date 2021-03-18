using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using API.DTOs;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;


namespace API.Controllers
{
    [Authorize]
    public class UsersController : BaseApiController
    {
        private readonly IUserRepository userRepository;
        private readonly IMapper mapper;

        public UsersController(IUserRepository userRepository,
        IMapper mapper)
        {
            this.mapper = mapper;
            this.userRepository = userRepository;

        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<MemberDto>>> getUsers()
        {
            var users = await userRepository.GetMembersAsync();

            return Ok(users);

        }

        [HttpGet("{username}")]
        public async Task<ActionResult<MemberDto>> getUser(string username)
        {
            return await userRepository.GetMemberAsync(username);

        }

        [HttpPut]
        public async Task<ActionResult> UpdateUser(MemberUpdateDto memberUpdateDto)
        {
            var username = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            var user = await this.userRepository.GetUserByUsernameAsync(username);

            this.mapper.Map(memberUpdateDto, user);

            userRepository.Update(user);

            if (await this.userRepository.SaveAllAsync())
            {
                return NoContent();
            }
            return BadRequest("Failed to update!");
        }

    }
}