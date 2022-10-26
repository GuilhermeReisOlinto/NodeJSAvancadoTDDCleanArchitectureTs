/* eslint-disable @typescript-eslint/restrict-template-expressions */
export class PersonController {
  speak (name?: string | undefined): string | undefined {
    if (name !== '') return `O seu nome é: ${name}`
    return 'O seu nome é: fulano'
  }
}
