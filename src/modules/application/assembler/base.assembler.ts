export interface BaseAssembler<Entity, DomainEntity, DTO> {

    applyEntityToDto: (entity: Entity) => DTO;

    applyDomainToDto: (domainEntity: DomainEntity) => DTO;
}
