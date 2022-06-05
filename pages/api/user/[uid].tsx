import { PrismaClient } from '@prisma/client'
import moment from "moment"
import _ from "lodash"
const prisma = new PrismaClient()

export default async function handle(req, res) {
  if (req.method === 'GET') {
    const { uid } = req.query
    const userLogs = await prisma.userLog.findMany({

      where: { userId: uid }, include: { workoutLine: { include: { exercise: true } } },
    })
      const sortedUserLogs= userLogs.sort((a ,b )=> (b.date.getTime()) - (a.date.getTime()))
    const groupedData = _(sortedUserLogs).groupBy(
      (x) => x.workoutLine.exerciseId
   
    );
    const groupedDataFinal = groupedData.map((value) => {
      return {
        name: value[1].workoutLine.exercise.name,
        
        max: Math.max(
          ...value.map((x) => {
            return x.weight;
          })
        ),
        data: value.map((x) => {
          return x.weight;
        }),
        labels: value.map((x) => {
          return moment(x.date).format('MMM Do YY');
        })
      };
    });
    console.log(sortedUserLogs)
    if (!userLogs) {
      res.status(400).json({ msg: `userID '${uid}' does not exist` })
    }
    res.status(200).json({ groupedDataFinal})

   }
}
