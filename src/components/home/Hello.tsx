import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { socials } from '@/consts';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Social from './Social';

export function Hello() {
  const [isVisible, setIsVisible] = useState(false);
  const hello = "Dream, Is Like Wind☁️".split('');
  const txt = "You Can't See But You Can Feel".split('');
  const detail = "<Keigo/>".split('');
  useEffect(() => {
    setIsVisible(true);
  });

  return (
    <TooltipProvider>
      <div className="grid grid-rows-2 text-base md:grid-cols-2 md:grid-rows-none md:justify-center md:items-center lg:text-4xl font-mono w-screen h-screen bg-white text-black font-light">
        <div className="h-full flex justify-center items-center">
          <h1>
            {isVisible && (
              <>
                <motion.div className="mb-2">
                  {hello.map((char, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 100 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.div>
                <motion.div className="mb-8">
                  {txt.map((char, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 100 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.div>
                <div className="mb-8">
                  <motion.div
                    className="inline-block hover:bg-gray-200"  // 使得容器随内容的大小变化，而不是占据整行
                  >
                    {detail.map((char, index) => (
                      <motion.span
                        key={index}
                        initial={{opacity: 0, y: 100}}
                        animate={{opacity: 1, y: 0}}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>

                <motion.div className="flex gap-4 items-center text-xl text-black">
                  {socials.map(({ name, url, icon, color }, index) => (
                    <motion.a
                      key={name}
                      href={url}
                      target={'_blank'}
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 100 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="inline-block"
                      aria-label={`link to ${name}`}
                    >
                      <Tooltip>
                        <TooltipTrigger>
                          <Social social={{ icon, color }} />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </motion.a>
                  ))}
                </motion.div>
              </>
            )}
          </h1>
        </div>
        <div className="h-full flex justify-center items-center">
          {isVisible && (
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              aria-label="site owner avatar"
              className="size-80 bg-contain rounded-full ring-1 ring-zinc-300/20 shadow-md"
              style={{ backgroundImage: `url(https://sliverkeigo.top/api/v2/objects/avatar/d7mox619mtisq9vtxt.png)` }}
            />
          )}
        </div>
      </div>
    </TooltipProvider>
  );
}
