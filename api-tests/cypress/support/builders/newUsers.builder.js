import { faker } from '@faker-js/faker';

export class NewRegularUsersBuilder {
    constructor() {
        this.userRegular = {
            nome: faker.person.fullName(),
            email: faker.internet.email(),
            password: faker.internet.password(8, true),
            administrador: 'false'
        };
    }

    static new() {
        return new NewRegularUsersBuilder();
    }

    build() {
        return { ...this.userRegular }; 
    }

}

export class NewAdministratorUsersBuilder {
    constructor() {
        this.userAdmin = {
            nome: faker.person.fullName(),
            email: faker.internet.email(),
            password: faker.internet.password(8, true),
            administrador: 'true'
        };
    }

    static new() {
        return new NewAdministratorUsersBuilder();
    }

    build() {
        return { ...this.userAdmin }; 
    }

}