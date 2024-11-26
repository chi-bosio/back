import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class GoogleUserDto {
  /**
   * Nombre del usuario.
   * @example "Juan"
   */
  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  name: string;

  /**
   * Nombre de usuario.
   * @example "jdoe"
   */
  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  username: string;

  /**
   * Apellido del usuario.
   * @example "Perez"
   */
  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  lastname: string;

  /**
   * Email del usuario.
   * @example "user@example.com"
   */
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
