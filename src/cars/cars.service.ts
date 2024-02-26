import { Injectable } from '@nestjs/common';
import { Car as CarModel, Prisma } from '@prisma/client'
import { PrismaService } from '../prisma/primsa.service';

@Injectable()
export class CarsService {

  constructor(private readonly prismaService: PrismaService) { }
  async create(data: Prisma.CarCreateInput): Promise<CarModel> {
    try {
      const car = await this.prismaService.car.create({ data })
      return car;
    } catch (error) {
      throw error
    }
  }

  async findAll(): Promise<CarModel[]> {
    try {
      return await this.prismaService.car.findMany()
    } catch (error) {
      throw error
    }
  }

  async findOne(where: Prisma.CarWhereUniqueInput) {
    try {
      return await this.prismaService.car.findUnique({ where })
    } catch (error) {
      throw error
    }
  }

  async update(where: Prisma.CarWhereUniqueInput, data: Prisma.CarUpdateInput) {
    try {
      return await this.prismaService.car.update({ data, where })
    } catch (error) {
      throw error
    }
  }

  async remove(where: Prisma.CarWhereUniqueInput) {
    try {
      return await this.prismaService.car.delete({ where })
    } catch (error) {
      throw error
    }
  }
}
