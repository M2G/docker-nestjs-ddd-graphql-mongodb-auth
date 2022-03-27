/*eslint-disable*/
import { IUserService } from '../user';
import { Inject } from '@nestjs/common';
import { UserDetailQueryArg } from 'interfaces/graphql/user/dto/user-detail.args';
import { UserAssembler } from 'application/assembler/user.assembler';
import { UserMapperService } from 'infrastructure/mapper/user.mapper';
import { UserDto } from 'interfaces/graphql/user/types/user';
import { UserInput } from 'interfaces/graphql/user/dto/user-add.input';
import { UserRepositoryImpl } from 'infrastructure/repository/user.repository';
import { User } from 'domain/aggregate/user/user';

export class UserService implements IUserService {

    /**
     * UserMapperService、UserAssembler
     */
    @Inject()
    private readonly userMapper!: UserMapperService;

    @Inject()
    private readonly userAssembler!: UserAssembler;

    @Inject()
    private readonly userRepository!: UserRepositoryImpl;

    /**
     * userMapper  userEntity
     * @param args
     */
    async findOneById(args: UserDetailQueryArg): Promise<UserDto> {
        const uid = args.id;
        const user = await this.userMapper.find(uid);
        return this.userAssembler.applyEntityToDto(user);
    }

    /**
     *
     * @param user
     */
    async add(user: UserInput): Promise<UserDto> {
        let userDomain = new User();
        userDomain = Object.assign({}, userDomain, user);
        const userDomainEntity = await this.userRepository.save(userDomain);
        const userDto = await this.userAssembler.applyDomainToDto(userDomainEntity);

        console.log('userDto', userDto);

        return userDto;
    }
}
