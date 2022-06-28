import { FC, ReactNode } from "react"

interface ComponentNameProps {
  children: ReactNode,
}

const DarkLayout: FC<ComponentNameProps> = ({ children }) => {
  return (
    <div style={{
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: '5px',
        padding: '10px'
    }}>
        <h3>Dark-Layout</h3>
        <div>
            { children }
        </div>
    </div>
  )
}

export default DarkLayout