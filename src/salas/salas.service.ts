import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSalaDto } from './dto/create-sala.dto';
import { UpdateSalaDto } from './dto/update-sala.dto';
import { Sala, SalaDocument} from './entities/sala.entity'

@Injectable()
export class SalasService {
  constructor(@InjectModel(Sala.name) private salaModel: Model<SalaDocument>) {}

  create(createSalaDto: CreateSalaDto) {
    const user = new this.salaModel(createSalaDto);
    return user.save();
  }

  findAll() {
    return this.salaModel.find();
  }

  findOne(id: string) {
    return this.salaModel.findById(id);
  }

  update(id: string, updateSalaDto: UpdateSalaDto) {
    return this.salaModel.findByIdAndUpdate({
      _id: id
    },
    {
      $set: updateSalaDto
    },
    {
      new: true
    }).exec();
  }

  remove(id: string) {
    return this.salaModel.deleteOne({
      _id: id
    }).exec();
  }
}
