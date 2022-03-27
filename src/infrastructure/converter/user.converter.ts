import { User } from 'domain/aggregate/user/user';
import { UserEntity } from 'infrastructure/entity/user.entity';

export class UserConverter {
  public static toEntity(user: User): UserEntity {
    let userEntity = new UserEntity();
    userEntity = { ...userEntity, ...user };
    return userEntity;
  }

  public static toDomain(userEntity: UserEntity): User {
    let user = new User();
    user = { ...user, ...userEntity };
    return user;
  }
}
