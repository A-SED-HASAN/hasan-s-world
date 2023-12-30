import React from 'react'
import styled from '@emotion/styled'
import { BreadCrumb } from '../components'
export default function Legal() {
  return (
    <Wrapper className='fixed-width'>
      <BreadCrumb />
      <h1>Credits</h1>
      <div>
        <p>
          Thanks to all Sketchfab users who provided their 3D assets and made
          this project possible:
        </p>
        <br />
        <p>
          Matthias Krammer - Low Poly Cyclist
          <br /> sycoinc - Low Poly Tree Concept
          <br /> ARGYLLE - FOOD TRUCK
          <br /> Claqueta - Clapperboard
          <br /> Suushimi - Low Poly Camper
          <br /> iangchang - Robo Bomb Denys
          <br /> Almaral - Idle 2 Male
        </p>
      </div>
      <h1>Disclaimer for joshuas.world</h1>
      <div>
        <p>
          If you require any more information or have any questions about my
          site's disclaimer, please feel free to contact me by email at
          joshua.vonhofen@gmail.com.
        </p>
        <br />
        <p>
          All the information on this website - joshuas.world - is published in
          good faith and for general information purpose only. joshuas.world
          does not make any warranties about the completeness, reliability and
          accuracy of this information. Any action you take upon the information
          you find on this website (joshuas.world), is strictly at your own
          risk. joshuas.world will not be liable for any losses and/or damages
          in connection with the use of my website.
        </p>
        <br />
        <p>
          From my website, you can visit other websites by following hyperlinks
          to such external sites. While I strive to provide only quality links
          to useful and ethical websites, I have no control over the content and
          nature of these sites. These links to other websites do not imply a
          recommendation for all the content found on these sites. Site
          ownersFrom my website, you can visit other websites by following
          hyperlinks to such external sites. While I strive to provide only
          quality links to useful and ethical websites, I have no control over
          the content and nature of these sites. These links to other websites
          do not imply a recommendation for all the content found on these
          sites. Site owners and content may change without notice and may occur
          before I have the opportunity to remove a link which may have gone
          'bad'. and content may change without notice and may occur before I
          have the opportunity to remove a link which may have gone 'bad'.
        </p>
        <br />
        <p>
          Please be also aware that when you leave my website, other sites may
          have different privacy policies and terms which are beyond my control.
          Please be sure to check the Privacy Policies of these sites as well as
          their "Terms of Service" before engaging in any business or uploading
          any information.
        </p>
      </div>
      <h1>Consent</h1>
      <p>
        By using my website, you hereby consent to my disclaimer and agree to
        its terms.
      </p>

      <h1>Update</h1>
      <p>
        Should I update, amend or make any changes to this document, those
        changes will be prominently posted here.
      </p>
    </Wrapper>
  )
}

const Wrapper = styled('div')(() => ({
  margin: '5% auto ',
  color: 'var(--white)',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  h1: {
    fontSize: '48px',
    fontWeight: 400,
    lineHeight: '120%',
  },
  h2: {
    fontSize: '26px',
    fontWeight: 600,
    lineHeight: '120%',
  },
  p: {
    fontSize: '22px',
    fontWeight: 400,
    lineHeight: '150%',
  },
  '@media (width<= 600px)': {
    gap: '1.5rem',

    h1: {
      fontSize: '24px',
    },
    h2: {
      fontSize: '20px',
    },
    lineHeight: '120%',

    p: {
      fontSize: '18px',
    },
  },
}))
