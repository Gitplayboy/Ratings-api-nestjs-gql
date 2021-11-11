import { CreateAdminInput } from '../dto/create-admin.input';

export const AdminServiceFactory = () => ({
  create: (_: CreateAdminInput) => MOCK_ADMIN,
});

export const AdminRepositoryFactory = () => ({
  create: () => ({
    ...MOCK_ADMIN,
  }),
  findOne: (id: number) => new Promise(() => ({ ...MOCK_ADMIN, id })),
  save: () => ({ ...MOCK_ADMIN }),
});

export const MOCK_ADMIN = {
  username: '',
  password: '',
  hashPassword: () => new Promise(() => {}),
  id: 1,
  createdAt: new Date(),
  comparePassword: () => new Promise(() => {}),
};
