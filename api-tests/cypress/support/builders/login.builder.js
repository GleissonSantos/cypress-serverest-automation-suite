import { faker } from '@faker-js/faker';

export class LoginBuilder {
    constructor() {
        this.credentials = {
            email: '',
            password: '',
        };
    }

    withPassword(password) {
        this.credentials.password = password;
        return this;
    }

    withUnregisteredEmail() {
        this.credentials.email = faker.internet.email();
        this.credentials.password = faker.internet.password(8, true);
        return this;
    }

    withInvalidEmail() {
        this.credentials.email = 'emailInvalido';
        return this;
    }

    build() {
        return this.credentials;
    }

    static new() {
        return new LoginBuilder();
    }
}