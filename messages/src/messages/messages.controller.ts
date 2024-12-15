import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-messages.dto';
import { MessagesService} from "./messages.service";

@Controller('messages')
export class MessagesController {
  constructor(public messagesService: MessagesService) {}

  @Get()
  listMessages(){
    return this.messagesService.findAll();
  }

  @Post()
  createMessages(@Body() body: CreateMessageDto) {
    this.messagesService.createMessages(body.content);
  }

  @Get('/:id')
  getMessages(@Param('id') id: string){
    return this.messagesService.findOne(id);
  }
}
