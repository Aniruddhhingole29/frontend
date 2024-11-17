import React, { useEffect, useState } from 'react'
import { Card } from './ui/card';
import { CardContent } from './ui/card';
import { MAX_FREE_COUNTS } from '@/constants';
import { Progress } from "@/components/ui/progress"
import { Button } from './ui/button';
import { Zap } from 'lucide-react';

interface FreecounterProps{
    apiLimitCount:number;
    isPro : boolean;
};

export const FreeCounter = ({
    apiLimitCount = 0,
    isPro = false,
}:FreecounterProps) => {
    const [mounted,setMounted] = useState(false)

    useEffect(()=>{
        setMounted(true);

    },[])
    if(!mounted){
        return null;
    }
    if(isPro){
        return null;
    }

  return (
    <div className='p-3'>
        <Card className='bg-white/10 border-0'>
            <CardContent className='py-6'>
                <div className='text-center text-sm text-white mb-4 space-y-2'>
                    <p>
                        {apiLimitCount} / {MAX_FREE_COUNTS} Free Generations
                    </p>
                    <Progress className='h-3'
                        value={(apiLimitCount / MAX_FREE_COUNTS)*100} />
                    
                
                </div>
            </CardContent>
        </Card>
    </div>
  )
}
