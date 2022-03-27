export interface BaseAssembler<Entity, DomainEntity, DTO> {

    applyEntityToDto: (entity: Entity) => Promise<DTO>;

    applyDomainToDto: (domainEntity: DomainEntity) => Promise<DTO>;
}
