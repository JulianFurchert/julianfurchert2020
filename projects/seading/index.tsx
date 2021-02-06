import { Container, Text, Box, Paragraph, Slideshow, ImagesCase, InlineLink, ProjectInformation } from '../../components'

export default function Framo() {
  return (
    <Container>
      <Text as="h1" variant="headline" css={{marginBottom: 20}}>
        Seading
      </Text>
      <Box css={{ maxWidth: 1200 }}>
          <Paragraph>
            During our journey through Southeast Asia, <InlineLink href="https://evejazmati.com/">Eve Jazmati</InlineLink> and I decided to visit the first ever Interior Design School in the former capital city of Myanmar Yangon. We we‘re curious to find out what was taught there and how, is it different to our design classes in Düsseldorf. What happened was an exciting exchange of information and creativity from both sides. It was amazing and fulfilling. We wanted more! Why not discover, document and talk to more people. That moment was the birth of Seading!
          </Paragraph>
          {/* <Paragraph>
            We decided to visit the the three big cities Singapore, Kuala Lumpur and Bangkok again. We wrote to small and big agencies, designers, illustrators and small printers. How do they handle typography, shapes and color? What gives them their inspiration and motivation. How important is the topic Identity? It became a highly inspiring journey. We were welcomes by all with open arms. The Seading project encompasses 17 interviews
          </Paragraph>
          <Paragraph>
            During our journey through Southeast Asia we were captivated by all the letterings/script/writings we couldn’t read or comprehend. This is what inspired Eve and me to create our own fictitious type (lettering), which we gave the designers. Much like the unknown shapes and fonts we had seen, this writing was unknown to the designers. We were curious to find out, what the designers would do with these new, unknown (and cryptic) letters.
          </Paragraph> */}
          <Paragraph>
            For this incredible experience we thank all the studios and designers who have welcomed us so kindly: <InlineLink href="#">Interiordesign-Schule Myanmar</InlineLink>, <InlineLink href="https://somewhere-else.co/">Somewhere Else</InlineLink>, <InlineLink href="https://factory1611.com/">Factory 1611</InlineLink>, <InlineLink href="http://theasylum.com.sg/">Ayslum</InlineLink>, <InlineLink href="https://www.behance.net/questcequecest">qu’est-ce que c’est design</InlineLink>, <InlineLink href="https://flagandmountains.com/">Flag & Mountains</InlineLink>, <InlineLink href="http://donotdesign.com/v3/">Do Not Design</InlineLink>, <InlineLink href="https://www.gyro.com/">gyro</InlineLink>, <InlineLink href="https://someearlybirds.com/">Some Early Birds</InlineLink>, <InlineLink href="http://wearenotlie.com/">LIE</InlineLink>, <InlineLink href="http://tsubakistudio.net">Tsubaki</InlineLink>, <InlineLink href="http://www.conscious.co.th/">Conscious</InlineLink>,  <InlineLink href="https://farmgroup.co.th/">Farmgroup</InlineLink>, <InlineLink href="https://practical.co.th/">Practical Design Studio</InlineLink>, <InlineLink href="https://www.behance.net/helloiamjk">Jackkrit Anantakul</InlineLink>
          </Paragraph>
      </Box>
      <Box css={{marginTop: 32}}>
        <ProjectInformation 
          code="https://github.com/JulianFurchert/seading" 
          site="https://seading.vercel.app/" 
          stack={[ 'React', 'Next.js' ]}
        />
      </Box>
      <Box css={{marginTop: 40}}>
        <ImagesCase 
          images={[
            [
              {
                src: '/img/seading/P9100123.jpg',
                width: 4608,
                height: 3456
              },
              {
                src: '/img/seading/IMG_1904.jpg',
                width: 4898,
                height: 3265
              },
              {
                src: '/img/seading/IMG_1867.jpg',
                width: 4898,
                height: 3265
              },
            ],
            [
              {
                src: '/img/seading/IMG_1848.jpg',
                width: 4898,
                height: 3265
              },
              {
                src: '/img/seading/IMG_1798.jpg',
                width: 4898,
                height: 3265
              },
              {
                src: '/img/seading/IMG_1790.jpg',
                width: 4898,
                height: 3265
              },
            ],
            [
              {
                src: '/img/seading/IMG_1786.jpg',
                width: 4898,
                height: 3265
              },
              {
                src: '/img/seading/IMG_1738.jpg',
                width: 4898,
                height: 3265
              },
              {
                src: '/img/seading/DSCF4802.jpg',
                width: 4896,
                height: 3264
              },
            ]
          ]}
        />
        <Slideshow 
          images={[
            {
              src: '/img/seading/gallery/IMG_1922.jpg',
              width: 4898,
              height: 3265
            },
            {
              src: '/img/seading/gallery/IMG_1836.jpg',
              width: 4898,
              height: 3265
            },
            {
              src: '/img/seading/gallery/DSCF4907.jpg',
              width: 4896,
              height: 3264
            },
            {
              src: '/img/seading/gallery/DSCF4822.jpg',
              width: 4896,
              height: 3264
            },
            {
              src: '/img/seading/gallery/DSCF4779.jpg',
              width: 4896,
              height: 3264
            },
            {
              src: '/img/seading/gallery/DSCF4735.jpg',
              width: 4896,
              height: 3264
            },
            {
              src: '/img/seading/gallery/DSCF4575.jpg',
              width: 4896,
              height: 3264
            }
          ]}
        />
        <ImagesCase 
          images={[
            [
              {
                src: '/img/seading/DSCF4789.jpg',
                width: 4896,
                height: 3264
              },
              {
                src: '/img/seading/DSCF4765.jpg',
                width: 4896,
                height: 3264
              },
              {
                src: '/img/seading/DSCF4753.jpg',
                width: 4896,
                height: 3264
              },
            ],
            [
              {
                src: '/img/seading/DSCF4741.jpg',
                width: 4896,
                height: 3264
              },
              {
                src: '/img/seading/DSCF4737.jpg',
                width: 4896,
                height: 3264
              },
              {
                src: '/img/seading/DSCF4699.jpg',
                width: 4896,
                height: 3264
              },
            ],
            [
              {
                src: '/img/seading/DSCF4692.jpg',
                width: 4896,
                height: 3264
              },
              {
                src: '/img/seading/DSCF4631.jpg',
                width: 4896,
                height: 3264
              },
              {
                src: '/img/seading/DSCF4582.jpg',
                width: 4896,
                height: 3264
              },
            ]
          ]}
        />
        <Slideshow 
          images={[
            {
              src: "/img/seading-poster-1.jpg",
              width: 881,
              height: 1200
            },
            {
              src: "/img/seading-poster-2.jpg",
              width: 881,
              height: 1200
            },
            {
              src: "/img/seading-poster-3.jpg",
              width: 881,
              height: 1200
            },
            {
              src: "/img/seading-poster-4.jpg",
              width: 881,
              height: 1200
            },
            {
              src: "/img/seading-poster-5.jpg",
              width: 881,
              height: 1200
            },
            {
              src: "/img/seading-poster-6.jpg",
              width: 881,
              height: 1200
            }
          ]}
        />
        <ImagesCase 
          images={[
            [
              {
                src: '/img/seading/DSCF4579.jpg',
                width: 4896,
                height: 3264
              },
              {
                src: '/img/seading/DSCF4472.jpg',
                width: 4896,
                height: 3264
              },
              {
                src: '/img/seading/DSCF4562.jpg',
                width: 4896,
                height: 3264
              },
            ],
            [
              {
                src: '/img/seading/_DSF3432.jpg',
                width: 3264,
                height: 4896
              },
              {
                src: '/img/seading/_DSF3410.jpg',
                width: 3264,
                height: 4896
              },
              {
                src: '/img/seading/_DSF3404.jpg',
                width: 3264,
                height: 4896
              },
              {
                src: '/img/seading/_DSF3402.jpg',
                width: 4896,
                height: 3264
              },
            ],
            [
              {
                src: '/img/seading/_DSF3370.jpg',
                width: 4896,
                height: 3264
              },
              {
                src: '/img/seading/_DSF3296.jpg',
                width: 4896,
                height: 3264
              },
              {
                src: '/img/seading/_DSF3298.jpg',
                width: 4896,
                height: 3264
              },
            ],
            [
              {
                src: '/img/seading/_DSC0763.jpg',
                width: 4898,
                height: 3265
              },
              {
                src: '/img/seading/_DSC0761.jpg',
                width: 4898,
                height: 3265
              },
              {
                src: '/img/seading/_DSC0747.jpg',
                width: 4608,
                height: 3072
              },
            ],
          ]}
        />
      </Box>
    </Container>
  )
}
