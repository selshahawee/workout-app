import React from 'react'
import WorkOutCard from '../components/WorkOutCard'
import CardTesjt from '../images/cardTest.jpg'
function browse() {
const CardTest="/cardTest.jpg"
    const workOuts = [
        {
            key: '1',
            title:'pull ups',
            caption:'caption1',
            img:CardTest,
            video:'https://youtu.be/ojULkWEUsPs',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptatem beatae ipsum ex temporibus saepe velit in officiis vero minus officia nobis vitae, asperiores rem? Quibusdam aspernatur deserunt id vel fugit non sed! Soluta officiis dicta, sint, optio porro blanditiis totam eligendi beatae nihil aperiam molestias reiciendis, harum asperiores quam!'
        },
        {
            key: '2',
            title:'pull ups',
            caption:'caption2',
            img:CardTest,
            video:'https://youtu.be/ojULkWEUsPs',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptatem beatae ipsum ex temporibus saepe velit in officiis vero minus officia nobis vitae, asperiores rem? Quibusdam aspernatur deserunt id vel fugit non sed! Soluta officiis dicta, sint, optio porro blanditiis totam eligendi beatae nihil aperiam molestias reiciendis, harum asperiores quam!'
        },
        {
            key: '3',
            title:'pull ups',
            caption:'caption3',
            img:CardTest,
            video:'https://youtu.be/ojULkWEUsPs',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptatem beatae ipsum ex temporibus saepe velit in officiis vero minus officia nobis vitae, asperiores rem? Quibusdam aspernatur deserunt id vel fugit non sed! Soluta officiis dicta, sint, optio porro blanditiis totam eligendi beatae nihil aperiam molestias reiciendis, harum asperiores quam!'
        },
        {
            key: '4',
            title:'pull ups',
            caption:'caption4',
            img:CardTest,
            video:'https://youtu.be/ojULkWEUsPs',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptatem beatae ipsum ex temporibus saepe velit in officiis vero minus officia nobis vitae, asperiores rem? Quibusdam aspernatur deserunt id vel fugit non sed! Soluta officiis dicta, sint, optio porro blanditiis totam eligendi beatae nihil aperiam molestias reiciendis, harum asperiores quam!'
        },
        {
            key: '5',
            title:'pull ups',
            caption:'caption5',
            img:CardTest,
            video:'https://youtu.be/ojULkWEUsPs',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptatem beatae ipsum ex temporibus saepe velit in officiis vero minus officia nobis vitae, asperiores rem? Quibusdam aspernatur deserunt id vel fugit non sed! Soluta officiis dicta, sint, optio porro blanditiis totam eligendi beatae nihil aperiam molestias reiciendis, harum asperiores quam!'
        },
        {
            key: '6',
            title:'pull ups',
            caption:'caption6',
            img:CardTest,
            video:'https://youtu.be/ojULkWEUsPs',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptatem beatae ipsum ex temporibus saepe velit in officiis vero minus officia nobis vitae, asperiores rem? Quibusdam aspernatur deserunt id vel fugit non sed! Soluta officiis dicta, sint, optio porro blanditiis totam eligendi beatae nihil aperiam molestias reiciendis, harum asperiores quam!'
        },
    ]
  return (
    <ul className='grid grid-cols-3 gap-7 p-7'>
      {workOuts.map((w) => (
        <li key={w.key} className='rounded-lg bg-white border'>
            <WorkOutCard
                name ={w.title}
                description={w.description}
                image={w.img}
                caption={w.caption}
                video={w.video}
            />
        </li>
      ))}
    </ul>
  )
}

export default browse