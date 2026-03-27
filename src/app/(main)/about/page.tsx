import React from 'react'
import Image from 'next/image'
import Card from '@/components/ui/Card'

function page() {
    return (
        <div className=''>
            <div className='px-8 md:px-16 py-16'>

                <div className='grid grid-cols-1 md:grid-cols-4 gap-4 '>
                    {/* Intro */}
                    <Card className='md:col-span-4 flex flex-col-reverse md:flex-row justify-between items-center p-12'>
                        <div className='md:w-[60%] '>
                            <h1 className='font-heading font-light text-4xl mb-4 tracking-tight'>Hi, I&apos;m Dee Caulcrick</h1>

                            <p className=''>I'm a final year Computer Science student at the University of Lagos, and this is my final year project. <br />
                                I am building an AI-assisted EMR/EHR SaaS platform for Nigerian primary care clinics — because I kept thinking about the fact that most small clinics in Lagos are still running on paper folders, WhatsApp groups, and a doctor's memory. That felt like a solvable problem.
                            </p>
                        </div>

                        <div>
                            <Image src="/images/my-face.png" alt="Dee Caulcrick"
                                width={300}
                                height={300}
                            />
                        </div>
                    </Card>
                    {/* Location */}
                    <Card className='md:col-span-2 row-span-2 flex flex-col items-left justify-center gap-6 p-12'>
                        <h2 className='font-heading text-3xl '>Why?</h2>
                        <p className=' mt-4'>Nigeria has thousands of boutique clinics doing important work with almost no digital infrastructure. The enterprise EMR systems that exist were built for Western hospitals — expensive, complex, and completely misaligned with how a three-person clinic in Surulere actually operates.<br /><br />
                            I wanted to build something that a doctor could sign up for on a Monday and actually be using by Tuesday. No IT person. No server room. No implementation consultant. Just a browser and a clinic full of patients.</p>
                    </Card>
                    {/* Fun fact */}

                    <Card className='md:col-span-2 lg:col-span-2 flex flex-col justify-center'>
                        <h2 className='font-heading text-3xl mb-4'>Building with:</h2>
                        <p>
                            Next.js · Supabase · PostgreSQL · OpenAI GPT 4o API · shadcn/ui · Vercel
                        </p>
                    </Card>
                    {/* Name pronunciation? */}
                    <Card className="md:col-span-2 lg:col-span-2 flex  justify-between items-center gap-6">
                        <h2 className='font-heading  text-3xl tracking-tight font-light mb-2'>Software References</h2>
                        <ul>
                            <li><a href="https://augusthealth.com" target="_blank" rel="noopener noreferrer" className='underline'>augusthealth.com</a></li>
                            <li><a href="https://www.vibrantpractice.com" target="_blank" rel="noopener noreferrer" className='underline'>vibrantpractice.com</a></li>
                        </ul>
                    </Card>
                    {/* fave books */}

                    {/* <Card className='md:col-span-2 lg:col-span-1'>
                        <Image src="/images/deeLondon.jpeg" alt="Dee Caulcrick"
                            width={300}
                            height={300}
                            className='w-full h-auto mb-4'
                        />
                        <p className='text-center text-sm'>Spent #Summer25 at Goldman Sachs in Birmingham, UK where I worked as a Software Engineer</p>
                    </Card> */}
                    {/* {stuff i've built} */}
                    <Card className='md:col-span-2 lg:col-span-2 lg:row-span-2 flex flex-col justify-center items-left gap-6'>
                        <h2 className='font-heading text-3xl mb-4'>The AI Part </h2>
                        <p>Yes, there will be an OpenAI integration. No, it will not be just a chatbot wrapper.
                            The AI sits on top of structured clinical data that the system accumulates over time. When a doctor types in a patient's symptoms, the system first queries the clinic's own historical records for similar cases — what was diagnosed before, what was prescribed, what worked. The language model helps format and reason over that context.
                        </p>
                        <p className='mt-4'> The intelligence dashboard will have a natural language interface so clinic staff can ask questions like "how many children under 12 had fever last month?" and get a real answer, without knowing SQL.
                            The drug interaction checker, by contrast, will be entirely rule-based — because determinism matters more than intelligence when patient safety is involved.  </p>
                    </Card>
                    {/* work */}
                    <Card className='md:col-span-4 lg:col-span-2 lg:row-span-2 flex flex-col justify-center items-left gap-6'>
                        <h2 className='font-heading text-3xl mb-4'>A note on scope </h2>
                        <p>This is a final year project, which means i'm building an MVP with clearly definsed boundaries. ASR for Nigerian clinical speech, a patient-facing portal, lab results integration, offline PWA support — these are all documented as future work, not omissions. <br /> <br />
                            The point isn't to build everything. It is to build the right things well enough to demonstrate that this is worth building properly.
                        </p>
                    </Card>
                    {/* hope to speak */}
                    <Card className='md:col-span-4'><p><i>Deborah Caulcrick — Computer Science, University of Lagos, 2026</i></p></Card>

                </div>
            </div>

        </div >
    )
}

export default page