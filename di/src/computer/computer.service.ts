import { Injectable } from '@nestjs/common';
import { CpuService} from "../cpu/cpu.service";
import { DiskService } from "../disk/disk.service";

@Injectable()
export class ComputerService {}
