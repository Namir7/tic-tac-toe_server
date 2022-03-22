import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'John_15',
      password: 'changeme1',
    },
    {
      userId: 2,
      username: 'Zoe',
      password: 'changeme2',
    },
    {
      userId: 3,
      username: 'Alan',
      password: 'changeme3',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
