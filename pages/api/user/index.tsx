import { PrismaClient, User } from '@prisma/client'
import { getSession } from 'next-auth/react'
const prisma = new PrismaClient()

export default async function handle(req, res) {

  //todo: add auth support

  switch (req.method) {
    case 'PUT':
      updateUserInfo(req, res)
      break
  
  }
}


async function updateUserInfo(req, res) {
    try {
        const session= await getSession({req})
      const userEmail = session.user.email
      const { weight, height, age, gender } =req.body
      console.log(req.body)

      const updateUserInfo = await prisma.user.update({

        where: { email: userEmail},
        data: {
          weight:+weight,
          age:+age,
          height:+height,
          gender,
        },
      })
        
      res.status(200).json({ msg: 'user info updated', updateUserInfo })
    } catch (err) {
        console.log(err)
      res.status(400).json({ msg: 'something went wrong', details: err })
    }
  }