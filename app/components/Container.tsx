interface ContainerProps{
    children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({children}) => {
    return ( 
    <div className="max-w-[1920px] mx-auto xl:px-20 md:px-2 px-4">
      {/* 최대크기 1920으로 주고, 양옆으로 auto margin, lx크기일때 양옆 5rem padding, md크기일떄 양옆 0.5rem padding, 나머지 1rem padding*/}
      {children}
		</div>
    );
}
 
export default Container;