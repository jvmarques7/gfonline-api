import {EntityRepository, Repository} from "typeorm";
import { UserAdmin } from "../entities/UserAdmin";

@EntityRepository(UserAdmin)
class UserAdminRepositories extends Repository<UserAdmin> {}

export {UserAdminRepositories};