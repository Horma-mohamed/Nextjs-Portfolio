import {Flex,Box,Text} from '@chakra-ui/react'
import {GiHeartOrgan} from 'react-icons/gi'
export default function  Footer(){
    return(
        <div className=' w-full  bg-gray-40 absolute bottom-0 bg-gray-20 h-20 dark:bg-gray-800 ' >
            <Flex h='100%' justifyContent='Center' alignItems='center'   >
                <Box display='flex' justifyContent='center' >
                    <Text fontSize='20px' className='text-gray-800 dark:text-gray-100' >Made with <span  ><GiHeartOrgan className='heart relative  inline text-red-700 dark:text-red-600' /></span> by me</Text>
                </Box>
            </Flex>
        </div>
        
    )
}