export interface ConverterInterface<Domain, Entity> {

    toEntity: (t: Domain) => Entity;

    toDomain: (r: Entity) => Domain;
}
