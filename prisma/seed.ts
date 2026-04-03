import { PrismaClient } from '@prisma/client'
import { PrismaMariaDb } from '@prisma/adapter-mariadb'
import 'dotenv/config' 

const adapter = new PrismaMariaDb(process.env.DATABASE_URL as string)

const prisma = new PrismaClient({ adapter })

async function main() {
  console.log('Clearing old data...')
  await prisma.userprofile.deleteMany()
  await prisma.user.deleteMany()

  console.log('Seeding users...')

  const user1 = await prisma.user.create({
    data: {
      email: 'juanmarcus.ferrer.cics@ust.edu.ph', 
      full_name: 'Juan Marcus Ferrer',
      user_type: 'OWNER', 
    },
  })

  const user2 = await prisma.user.create({
    data: {
      email: 'johnbenedict.ramos.cics@ust.edu.ph',
      full_name: 'John Benedict Ramos',
      user_type: 'OWNER', 
    },
  })

  const user3 = await prisma.user.create({
    data: {
      email: 'joseangelo.panganiban.cics@ust.edu.ph',
      full_name: 'Jose Angelo Panganiban',
      user_type: 'OWNER', 
    },
  })

  const user4 = await prisma.user.create({
    data: {
      email: 'zyrogonzales.cics@ust.edu.ph',
      full_name: 'Zyro Gonzales',
      user_type: 'OWNER', 
    },
  })

  const user5 = await prisma.user.create({
    data: {
      email: 'francisgerard.samson.cics@ust.edu.ph',
      full_name: 'Francis Gerard Samson',
      user_type: 'OWNER', 
    },
  })

  const user6 = await prisma.user.create({
    data: {
      email: 'hamilcar.gisala.cics@ust.edu.ph',
      full_name: 'Hamilcar Gisala',
      user_type: 'OWNER', 
    },
  })

  const user7 = await prisma.user.create({
    data: {
      email: 'joeyalfonso.santos.cics@ust.edu.ph',
      full_name: 'Joey Alfonso Santos',
      user_type: 'OWNER', 
    },
  })

  const user8 = await prisma.user.create({
    data: {
      email: 'stephon.ulang.cics@ust.edu.ph',
      full_name: 'Stephon Ulang',
      user_type: 'OWNER', 
    },
  })

  const user9 = await prisma.user.create({
    data: {
      email: 'rmax245@gmail.com',
      full_name: 'JB',
      user_type: 'EMPLOYEE', 
    },
  })

  const user10 = await prisma.user.create({
    data: {
      email: 'zyro.g1027@gmail.com',
      full_name: 'Zyro',
      user_type: 'EMPLOYEE', 
    },
  })

  const user11 = await prisma.user.create({
    data: {
      email: 'miraifuture619@gmail.com',
      full_name: 'Jose',
      user_type: 'EMPLOYEE', 
    },
  })

  //just copy paste users here to add into DB

  console.log('Seeding finished.')
  console.log({ user1, user2, user3, user4, user5, user6, user7, user8, user9, user10, user11 })
}
    
main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })