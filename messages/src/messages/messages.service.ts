import { Injectable } from '@nestjs/common';
import { MessagesRepository} from "./messages.repository";

@Injectable()
export class MessagesService {
  constructor(public messageRepository: MessagesRepository) {}

  findOne (id: string) {
    return this.messageRepository.findOne(id);
  }

  createMessages(content: string) {
    return this.messageRepository.create(content)
  }

  findAll(){
    return this.messageRepository.findAll();
  }
}