import User from 'modules/domain/aggregate/user';
import UserEntity from 'modules/infrastructure/entity/user.entity';

export default class UserConverter {
  static toEntity(user: User): UserEntity {
    const userEntity: any = new UserEntity();
    return { ...userEntity, ...user };
  }

  static toDomain(userEntity: UserEntity): User {
    const user: any = new User();
    return { ...user, ...userEntity };
  }
}
