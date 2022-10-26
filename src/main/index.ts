import '../main/config/module-alias'// chamando sempre na main
import { PersonController } from '@/application/controller/person-controller'

const spaker = new PersonController()
console.log(spaker.speak('Andre'))
console.log(spaker.speak(''))
