import {EntityRepository, Repository} from "typeorm";
import { Event } from "../entities/Event";

@EntityRepository(Event)
class EventRepositories extends Repository<Event> {}

export {EventRepositories};