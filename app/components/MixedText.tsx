'use client'

interface MixedTextProps {
  label: string
  secondaryLabel: string
  newLine?: boolean
  large?: boolean
}

const MixedText: React.FC<MixedTextProps> = ({
  label,
  secondaryLabel,
  newLine,
  large
}) => {

  return (
    <div
      className={`
        font-bold
        ${large ? 'lg:text-7xl sm:text-7xl text-5xl' : 'sm:text-5xl text-4xl'}
        ${large ? 'uppercase' : ''}
      `}
    >
      <div
        className={`
         text-color1 
          ${newLine ? '' : 'inline'}
          ${newLine && !large ? 'mb-4' : 'mb-0'}
        `}
      >
        {label}
      </div>
      <div
        className={`text-secondary ${newLine ? '' : 'inline'}`}
      >
        {" "}{secondaryLabel}
      </div>
    </div>
  );
}

export default MixedText;