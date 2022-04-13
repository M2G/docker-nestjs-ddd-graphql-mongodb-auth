import { User } from 'modules/users/domain/aggregate/user';
import { UserEntity } from 'modules/users/infrastructure/entity/user.entity';

export class UserConverter {
  static toEntity(user: User): UserEntity {
    let userEntity: any = new UserEntity();
    userEntity = { ...userEntity, ...user };
    return userEntity;
  }

  static toDomain(userEntity: UserEntity): User {
    let user: any = new User();
    user = { ...user, ...userEntity };
    return user;
  }
}
