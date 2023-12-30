import styled from '@emotion/styled'
import { useGlobalContext } from '../../context'
import { Backdrop } from '../'

export default function Alert({
  background,
  color,
  icon,
  content,
  iconColor,
  confirm,
  confirmBtn1,
  confirmBtn2,
  background1,
  hover1,
  fn1,
  background2,
  hover2,
  fn2,
}) {
  const { hideModal, isModalShow, modalProps } = useGlobalContext()

  const styles = {
    background,
    color,
    iconColor,
    isModalShow,
  }

  return (
    <>
      {modalProps.disableHide && (
        <Backdrop
          zIndex='200'
          closeFn={() => hideModal()}
          condition={isModalShow}
        />
      )}
      <Wrapper
        style={{ top: isModalShow ? '0' : '-200px' }}
        styles={styles}
        className='flex-column gap-2'
      >
        <div className='flex-between'>
          <div className='flex-center gap-2'>
            {icon}
            <h1>{content}</h1>
          </div>
          <button className='close-btn' onClick={hideModal}>
            {/* <Close /> */}
          </button>
        </div>

        {confirm && (
          <div className='confirm'>
            <button background={background1} hover={hover1} fn={fn1}>
              {confirmBtn1}
            </button>
            <button background={background2} hover={hover2} fn={fn2}>
              {confirmBtn2}
            </button>
          </div>
        )}
      </Wrapper>
    </>
  )
}

const Wrapper = styled('div')(
  ({ styles: { background, color, iconColor, isModalShow } }) => ({
    background,
    color,
    position: 'fixed',
    zIndex: '201',
    top: '-200px',
    left: '50%',
    transition: '.3s all',
    transform: 'translate(-50%,0)',
    marginTop: '3rem',
    width: '95vw',
    maxWidth: '500px',
    padding: '1rem',
    borderRadius: '9px',
    h1: {
      fontWeight: '600',
      fontSize: '1.3rem',
    },
    svg: {
      fill: iconColor,
      width: '25px',
    },
    '.close-btn': { cursor: 'pointer', '*': { cursor: 'pointer' } },
    '.confirm': {
      display: 'flex',
      justifyContent: 'center',
      gap: '1rem',
      button: {
        width: '100%',
      },
    },
  })
)
