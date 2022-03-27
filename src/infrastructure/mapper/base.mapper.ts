/*eslint-disable*/
import { Repository, FindManyOptions, FindOptionsWhere } from 'typeorm';

export abstract class BaseMapperService<T> {

    protected constructor(protected repo: Repository<T>) {}

    async find(id: number | any): Promise<T | any> {
        return await this.repo.findOne(id);
    }

    async findAll(options: FindManyOptions<T> | FindOptionsWhere<T>): Promise<T[]> {
        return await this.repo.find(options);
    }

    async delete(id: number): Promise<boolean> {
        const deleteResult: any = await this.repo.delete(id);
        return deleteResult?.affected > 0;
    }

    async findWithPage(options: FindManyOptions<T>) {
        return await this.repo.findAndCount(options);
    }

    async add(t: T | any): Promise<T> {
        return await this.repo.save(t);
    }

    async update(id: number, t: T): Promise<boolean> {
        const updateResult: any = await this.repo.update(id, t);
        return updateResult?.affected > 0;
    }
}
