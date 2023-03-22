import { IsBoolean, isNumber, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
 
  @IsNumber()
  public product_id!: number;

  @IsString()
  public product_name!: string;

  @IsString()
  public pack: string;

  @IsNumber()
  public pack_size: number;

  @IsNumber()
  public pack_price: number;

  @IsBoolean()
  public status:boolean;
}
