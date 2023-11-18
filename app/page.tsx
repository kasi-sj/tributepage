'use client';
import Tesla from '@/asset/Tesla.png'
import one from '@/asset/one.jpeg'
import two from '@/asset/two.jpeg'
import three from '@/asset/three.jpeg'
import four from '@/asset/four.jpeg'
import five from '@/asset/five.jpeg'
import six from '@/asset/six.jpeg'
import seven from '@/asset/seven.jpeg'
import eight from '@/asset/eight.jpeg'
import nine from '@/asset/nine.jpeg'
import ten from '@/asset/ten.jpeg'
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { Inter_Tight , ABeeZee , Oooh_Baby , Oxygen} from 'next/font/google';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Link } from 'lucide-react';
import { useRouter } from 'next/navigation';

const inter = Inter_Tight({ subsets: ['vietnamese'] })
const abeezee = ABeeZee({ weight:'400' , subsets: ['latin'] })
const oooh_baby = Oooh_Baby({weight:'400' , subsets: ['latin'] })
const oxygen = Oxygen({weight:'400' , subsets: ['latin'] })
const details = [
  {
    image:one,
    heading:"HE PATENTED THE POLYPHASE ALTERNATING CURRENT INDUCTION MOTOR IN 1887-88",
    details:"Considered one of the most useful inventions of modern times, the induction motor revolutionized the possibilities in the appliance industry. Although the first known working three phase AC induction motor is attributed to Galileo Ferraris in 1885, Nikola Tesla independently invented his own induction motor and filed for a US patent in 1887. Based on the principal of rotating magnetic fields, his first induction motor generated ¼ horse power at 1800 revolutions per minute and weighed only 20 pounds, which was a fantastic achievement at the time. It used electrical energy to produce mechanical energy; and replaced manual labor in factories. The three phase induction motor continues to be used extensively in industry, households and electrical machines all around the world."
  },
  {
    image:two,
    heading:"HIS ALTERNATING CURRENT EMERGED WINNER IN THE BATTLE OF CURRENTS",
    details:"The “war of currents“ or “battle of currents“ refers to the competitive period in the 1880s and 1890s in America for the introduction of competing electric power transmission systems. In 1882, Thomas Edison established his Edison Illuminating Company to bring electric lighting to homes and businesses. With Edison holding all the key patents, his direct current based electricity would be sold throughout the United States. Things took a turn in the mid 1880s with George Westinghouse entering the electric lighting business. He partnered with Tesla and in a few years posed a challenge to Edison and his backers. The ac current voltage could be stepped up and down and this meant that it was easier and cheaper to transmit it over long distances. In 1888 Westinghouse bought the patent rights to Tesla’s polyphase system of alternating-current dynamos, transformers and motors. This led to a bitter war of words, underhand tactics and media hype about the better and safer alternative in the lucrative business of providing electricity. The war culminated in 1893 where T esla, in order to prove its safety, reportedly used a Tesla coil to send electricity through himself to produce ight at the World Columbian Exposition. Edison backed direct current was dangerous and expensive over longer distances and despite his efforts to implement direct current, alternating current won the battle of currents. The modern electric distribution system is based on the pioneering work of Nikola Tesla."
  },
  {
    image:three,
    heading:"HE DEVELOPED TESLA TURBINE AS AN ALTERNATIVE ENGINE FOR MECHANICAL MACHINES",
    details:"Also referred to as a bladeless turbine, the Tesla Turbine used the boundary layer effect, and not a fluid impinging upon the blades as in a conventional turbine. It consisted of a number of flat steel discs properly balanced in a chamber moved with an inlet of steam or compressed air. The steam does not exert pressure against the rotor blades side-wise as in other types, but shot through between the blades edgewise. The Tesla Turbine was patented in the year 1913 as an alternative to piston engines. It could be employed for drawing automobiles, airplanes and other vehicles. However, it was considered impractical and never gained success."
  },
  {
    image:four,
    heading:"HE WAS INSTRUMENTAL IN BUILDING ONE OF THE FIRST HYDROELECTRIC PLANTS",
    details:"The World’s Columbian Exposition was a world fair held at Chicago in 1893. It was built over 686 acres containing many separate buildings. In 1892, Westinghouse Electric had managed to underbid Edison and General Electric on the contract to electrify this big fair. The Exposition in many ways introduced the wonder of electricity to the Americans. It was lit up by the President himself by pushing a button in the White House. Westinghouse and Tesla made no profit from the exposition but they demonstrated the safety, effectiveness and flexibility of ac current and Tesla’s innovations. The success was a big factor in their winning the contract to build a hydroelectric AC power station at Niagara Falls, the machinery bearing Tesla’s name and patent numbers. The project carried power to Buffalo by 1896 and was one of the first power stations of its kind in the world."
  },
  {
    image:five,
    heading:"HE INVENTED THE TESLA COIL LEADING TO THE POSSIBILITY OF WIRELESS TRANSMISSION",
    details:"Further exploring the work of Heinrich Hertz on electromagnetic radiations and radio waves, Tesla tried powering a Ruhmkorff coil with a high speed alternator. Ruhmkorff coils were comprised of a primary winding and a secondary winding to produce high voltages. Tesla soon found that high frequency current melted the insulation between the primary and secondary winding in the coil. This led Tesla to come up with the idea of using an air gap instead of insulating material between the primary and secondary windings; and an iron core that could be moved to different positions in or out of the coil. These modifications led to the invention of the Tesla Coil. It was patented in 1891, and though he had patented similar circuits in preceding periods, this had all the elements of the Tesla Coil. A truly revolutionary innovation, the Tesla Coil could wirelessly transmit electricity. It led to the Magnifying Transmitter forming the basis of Tesla’s wireless electricity dream. The technology is widely used in radios, televisions and other electronic equipment."
  },
  {
    image:six,
    heading:"HE INVENTED AN ELECTRO-MECHANICAL OSCILLATOR",
    details:"In 1893, Nikola Tesla patented a steam-powered electric generator known as Tesla’s electro-mechanical oscillator. Tesla’s oscillator is a reciprocating electricity generator. In it, steam is forced into the oscillator and exits through a series of ports. The steam pushes a piston up and down that is attached to an armature. This causes it to vibrate up and down at high speed, producing electricity. Another variation of the machine uses electromagnets to control the frequency of the piston’s oscillation. Tesla developed many versions of his electro-mechanical oscillator as he wanted it to replace the inefficient reciprocating steam engines used to turn generators. However, that was ultimately achieved by the development of highly efficient steam turbines."
  },
  {
    image:seven,
    heading:"HE MADE IMPORTANT CONTRIBUTIONS IN RADIO TECHNOLOGY",
    details:"In 1895, Nikola Tesla was preparing to send his first radio signal about 50 miles but the incident of his lab burning down delayed his testing plans. In 1896, Guglielmo Marconi gained the patent for his radio device based on 2 circuits in England. In 1897, Tesla submitted his patent for a multi circuit radio device which was awarded in 1900 in the United States. This led to the rejection of Marconi’s patent in the US in 1900. Marconi was however a rich man and had family connections with the English Aristocracy. His Marconi Wireless Telegraphmpany transmitted a radio signal across the Atlantic infringing on many Tesla patents. In 1904 in a surprising move the US patent office reversed their 1900 judgment and gave the patent to Marconi. In 1915 Tesla sued Marconi’s company but was financially weak to fight the corporation. In 1943, after the deaths of Tesla and Marconi, and in another surprising move, the US patent office upheld Tesla’s radio patent. It may be noted that the Marconi Company had sued the United States Government for use of its patents in World War I and the Court simply avoided action by restoring the priority of Tesla’s patent over Marconi. The invention of the Radio is an ambiguous subject with many claimants but Tesla’s vast contributions in the field of radio technology are beyond doubt."
  },
  {
    image:eight,
    heading:"8 NIKOLA TESLA CREATED ONE OF THE WORLD’S FIRST WIRELESS REMOTE CONTROLS",
    details:"At an electrical exhibition at Maddison Square Garden in 1898, Nikola Tesla would flummox the audience with his latest invention. In the first known example of the use of remote control Tesla would control a boat from afar using radio waves technology. Tesla later tried to sell the technology he called “tele automation“ to the U.S. military as a type of radio-controlled torpedo, but they showed little interest. However, the radio control technology continued to evolve over the years till it started being used for devices like television sets, DVD players etc."
  },
  {
    image:nine,
    heading:"HE PLAYED A KEY ROLE IN THE DEVELOPMENT OF X RAYS",
    details:"Noticing damage to his photographs, Tesla began investigating the cause of the problem in 1894. But his research was burnt in the fire that consumed his lab in 1895. A few months later in December, Wilhelm Conrad Roentgen went public with his discovery of “Roentgen Rays“ or X Rays. Despite the discovery, Tesla continued his experiments trying to construct his own machine which would produce images he called Shadowgraphs. Tesla correctly realized that strong shadows could be produced only at great object-film distances and with short exposure times; and that thick walls produced rays with greater penetrating power. He was also the first to comment on the biological hazards of X rays. He took an X-ray or shadowgraph of a foot with a shoe on it and sent it with a congratulatory letter to Roentgen. Roentgen in turn wrote “Dear Sir! You have surprised me tremendously with the beautiful photographs of wonderful discharges and I tell you thank you very much for that. If only I knew how you make such things! With the expression of special respect I remain yours devoted, W. C. Roentgen.“ (Courtesy of the Tesla Museum, Belgrade, Serbia; document no. MNT, CXLIV, 152.)"
  },
  {
    image:ten,
    heading:"NIKOLA TESLA HAD CLOSE TO 300 PATENTS",
    details:"Tesla was a prolific inventor and had close to 300 patents worldwide. He did not patent some of his innovations and some have laid hidden in the patent archives. There are at least 278 patents which are known to have been issued to Tesla in 26 countries, majorly United States, Britain and Canada. The patents include dynamo electric machine, electromagnetic motor, electric incandescent lamp, electrical distribution systems and generators, fluid propulsion and signaling systems. Nikola Tesla is regarded as one of the greatest scientists in history. Tesla, the SI unit of magnetic flux density, was named in his honor in 1960."
  }
]


const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const container = {
  visible: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
      bounce: 0.4,
    }
  }
}


export default function Home() {

  const router = useRouter();
  const click = () => {
    router.push('https://en.wikipedia.org/wiki/Nikola_Tesla')
  }
  return (
    <main className='p-7  flex justify-center items-center bg-slate-300' >
      <div className='w-full m-5 lg:w-3/4'>

      <div className='flex flex-col  justify-center items-center w-full'>
        <h1 className={' text-6xl font-thin  py-10 '+oooh_baby.className}>
        Nikola Tesla
        </h1>

        <motion.div  
        initial={{ scale: 0 }}
        animate={{  scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 60,
        }}
        >
          <div className='border-4 rounded-lg bg-white'>
            <Image className='rounded-lg' src={Tesla} alt="tesla" width={200} height={200} />
          </div>
        </motion.div>
      <p className='text-center py-10 underline text-xl'>
      “I do not regret that others have stolen my ideas, rather than why they haven't their own.”
      </p>
      </div>
        <div>
          <h2 className={'text-2xl p-8 underline '+oxygen.className}>Synopsis</h2>
          <p  className='p-5 '>
          Inventor Nikola Tesla was born in July of 1856, in what is now Croatia. He came to the United States in 1884 and briefly worked with Thomas Edison before the two parted ways. He sold several patent rights, including those to his alternating-current machinery, to George Westinghouse. His 1891 invention, the "Tesla coil," is still used in radio technology today. Tesla died in New York City on January 7, 1943.
          </p>
          <h2 className={'text-2xl p-8 underline '+oxygen.className} >Early Life</h2>
          <p className='p-5'>
          Nikola Tesla was born on July 10, 1856, in what is now Smiljan, Croatia. Tesla's interest in electrical invention was spurred by his mother, Djuka Mandic, who invented small household appliances in her spare time while her son was growing up. Tesla's father, Milutin Tesla, was a priest and a writer, and he pushed for his son to join the priesthood. But Nikola's interests lay squarely in the sciences. After studying at the Realschule, Karlstadt (later renamed the Johann-Rudolph-Glauber Realschule Karlstadt); the Polytechnic Institute in Graz, Austria; and the University of Prague during the 1870s, Tesla moved to Budapest, where for a time he worked at the Central Telephone Exchange. It was while in Budapest that the idea for the induction motor first came to Tesla, but after several years of trying to gain interest in his invention, at age 28 Tesla decided to leave Europe for America.
          </p>
        </div>
        <h2 className={'text-2xl p-8 underline '+oxygen.className}>Famed Inventor</h2>
        <p className='p-5'>
          In 1884 Tesla arrived the United States with little more than the clothes on his back and a letter of introduction to famed inventor and business mogul Thomas Edison, whose DC-based electrical works were fast becoming the standard in the country. Edison hired Tesla, and the two men were soon working tirelessly alongside each other, making improvements to Edison's inventions. However, several months later, the two parted ways due to a conflicting business-scientific relationship, attributed by historians to their incredibly different personalities: While Edison was a power figure who focused on marketing and financial success, Tesla was commercially out-of-tune and somewhat vulnerable. After parting ways with Edison, in 1885 Tesla received funding for the Tesla Electric Light Company and was tasked by his investors to develop improved arc lighting. After successfully doing so, however, Tesla was forced out of the venture and for a time had to work as a manual laborer in order to survive. His luck changed in 1887, when he was able to find interest in his AC electrical system and funding for his new Tesla Electric Company. Setting straight to work, by the end of the year, Tesla had successfully filed several patents for AC-based inventions. Tesla's AC system eventually caught the attention of American engineer and business man George Westinghouse, who was seeking a solution to supplying the nation with long-distance power. Convinced that Tesla's inventions would help him achieve this, in 1888 he purchased his patents for $60,000 in cash and stock in the Westinghouse Corporation. As interest in an alternating-current system grew, Tesla and Westinghouse were put in direct competition with Thomas Edison, who was intent on selling his direct-current system to the nation. A negative-press campaign was soon waged by Edison, in an attempt to undermine interest in AC power. Tesla, for his part, continued in his work and would patent several more inventions during this period, including the "Tesla coil," which laid the foundation for wireless technologies and is still used in radio technology today. Unfortunately for Thomas Edison, the Westinghouse Corporation was chosen to supply the lighting at the 1893 World's Columbian Exposition in Chicago, and Tesla conducted demonstrations of his AC system there. Two years later, in 1895, Tesla designed what was among the first AC hydroelectric power plants in the United States, at Niagara Falls. The following year, it was used to power the city of Buffalo, New York, a feat that was highly publicized throughout the world. With its repeat successes and favorable press, the alternating-current system would quickly become the preeminent power system of the 20th century, and it has remained the worldwide standard ever since. In addition to his AC system and coil, throughout his career, Tesla discovered, designed and developed ideas for a number of other important inventions—most of which were officially patented by other inventors—including dynamos (electrical generators similar to batteries) and the induction motor. He was also a pioneer in the discovery of radar technology, X-ray technology, remote control and the rotating magnetic field—the basis of most AC machinery.
        </p>
        <h2  className={'text-2xl p-8 underline '+oxygen.className}>The Fall from Grace</h2>
        <p className='p-5'>
        Having become obsessed with the wireless transmission of energy, around 1900 Nikola set to work on his boldest project yet: to build a global, wireless communication system—to be transmitted through a large electrical tower—for sharing information and providing free electricity throughout the world. With funding from a group of investors that included financial giant J. P. Morgan, in 1901 Tesla began work on the project in earnest, designing and building a lab with a power plant and a massive transmission tower on a site on Long Island, New York, that became known as Wardenclyffe. However, when doubts arose among his investors about the plausibility of Tesla's system and his rival, Guglielmo Marconi—with the financial support of Andrew Carnegie and Thomas Edison—continued to make great advances with his own radio technologies, Tesla had no choice but to abandon the project. The Wardenclyffe staff was laid off in 1906 and by 1915 the site had fallen into foreclosure. Two years later Tesla declared bankruptcy and the tower was dismantled and sold for scrap to help pay the debts he had accrued.
        </p>
        <h2 className={'text-2xl p-8 underline '+oxygen.className}>Death and Legacy</h2>
        <p className='p-5'>
          After suffering a nervous breakdown, Tesla eventually returned to work, primarily as a consultant. But as time went on, his ideas became progressively more outlandish and impractical. He also grew increasingly eccentric, devoting much of his time to the care of wild pigeons in New York City's parks. He even drew the attention of the FBI with his talk of building a powerful "death beam," which had received some interest from the Soviet Union during World World II. Poor and reclusive, Nikola Tesla died on January 7, 1943, at the age of 86, in New York City, where he had lived for nearly 60 years. But the legacy of the work he left behind him lives on to this day.
        </p>
        <motion.div className={'text-4xl font-thin   font-sans m-10 p-1 bg-slate-400 border rounded-lg text-center'+abeezee.className}
        
        variants={container}
        initial="hidden"
        whileInView="visible"
        exit="hidden"
        >
          NIKOLA TESLA’S 10 MAJOR CONTRIBUTIONS AND ACCOMPLISHMENTS
        </motion.div>
          <motion.ul
            variants={container}
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            className='flex flex-wrap gap-5 items-start justify-center'
          >
          {
            details.map((detail,index) => (
              
              <motion.li
              variants={item}
              >
              <ScrollArea className='h-[600px] rounded-md border border-slate-950'>
                <div key={detail.heading} className='flex flex-col  py-10 items-center justify-center w-[300px]'>
                  <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className='flex flex-col items-center justify-center'
                  >
                    <Image src={detail.image} alt="tesla" width={200} height={200} />
                  </motion.div>
                  <h2 className='text-lg p-8'>{detail.heading}</h2>
                  <p className='p-5 text-sm'>{detail.details}</p>
                </div>
              </ScrollArea>
            </motion.li>
            ))
          }
        </motion.ul>
        <p className='cursor-pointer text-center pt-10' >
            Want to Know More <span className='text-blue-600' onClick={click}>
              Click Here
            </span>
        </p>
      </div>
    </main>
  )
}
