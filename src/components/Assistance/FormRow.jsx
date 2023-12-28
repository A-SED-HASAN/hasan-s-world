import styled from '@emotion/styled'

export default function FormRow({
  type,
  name,
  value,
  handleChange,
  labelText,
  placeholder,
  icon,
  onClick,
  errorText,
  required,
}) {
  const styles = {
    onClick,
    required,
    errorText,
  }

  return (
    <Wrapper styles={styles}>
      <label htmlFor={name}>{labelText || name} :</label>
      <div className='input-wrapper'>
        <input
          placeholder={placeholder}
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={handleChange}
        />
        {icon && (
          <span className='icon' onClick={onClick}>
            {icon}
          </span>
        )}
      </div>
      <span className='error'>{errorText}</span>
    </Wrapper>
  )
}

const Wrapper = styled('div')(
  ({ styles: { required, errorText, onClick } }) => ({
    direction: 'rtl',
    fontFamily: 'inherit',
    zIndex: 2,
    label: {
      display: 'block',
      fontSize: '0.8rem',
      marginBottom: '0.5rem',
      color: 'var(--text-white)',
      '::after': {
        content: "'*'",
        padding: '.2rem',
        display: errorText && required ? '' : 'none',
        color: 'var(--error-300)',
      },
    },
    input: {
      textTransform: 'none',
      width: '100%',
      padding: '0.375rem 0.75rem',
      background: 'var(--text-white)',
      height: '35px',
      fontFamily: 'inherit',
      direction: 'ltr',
    },
    '.input-wrapper': {
      overflow: 'hidden',
      borderRadius: '5px',
      border: ' 1px solid var(--text-200)',
      display: 'flex',
      alignItems: 'center',
      span: {
        cursor: onClick ? 'pointer' : 'default',
        alignSelf: 'stretch',
        padding: '.375rem',
        borderRight: '1px solid var(--text-200)',
        background: 'var(--text-white)',
        display: 'grid',
        placeItems: 'center',
        svg: {
          width: '20px',
          height: '20px',
        },
        '*': {
          cursor: onClick ? 'pointer' : 'default',
        },
      },
    },

    '.error': {
      color: 'var(--error-300)',
      fontSize: '.7rem',
      lineHeight: '1',
    },
    '::placeholder': {
      fontFamily: 'inherit',
      color: 'var(--text-400)',
      fontSize: '.4rem',
    },
  })
)
