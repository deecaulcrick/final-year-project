import React from 'react'
import Image from 'next/image'
import Card from '@/components/ui/Card'

function page() {
    return (
        <div className='mt-20'>
            <div className='p-6 md:p-10 text-heading-text-color'>

                <div className='grid grid-cols-1 md:grid-cols-4 gap-4 '>
                    {/* Intro */}
                    <div className='md:col-span-4 flex flex-col-reverse md:flex-row justify-between items-center'>
                        <div className='md:w-[60%] '>
                            <h1 className='font-heading text-heading-text-color font-medium text-6xl mb-4 tracking-tighter'>Hi, I&apos;m Dee Caulcrick</h1>

                            <p className='text-heading-text-color'>I'm a final year Computer Science student at the University of Lagos, and this is my final year project. <br />
                                I am building an personal health record intelligence system for Nigerian patients because I kept thinking about the fact that most people in Nigeria have either lost all their medical records or are carrying their entire medical history in a plastic folder or and losing it every time they switch hospitals. That feels like a solvable problem.
                            </p>
                        </div>

                        <div>
                            <Image src="/images/my-face.png" alt="Dee Caulcrick"
                                width={300}
                                height={300}
                            />
                        </div>
                    </div>
                    {/* Location */}
                    <Card className='md:col-span-2 row-span-2 flex flex-col items-left justify-center gap-6 p-6'>
                        <h2 className='font-mono text-theme-lime uppercase tracking-tighter text-xl '>Why?</h2>
                        <p className=' mt-4'>Nigeria has millions of patients who see multiple doctors across multiple facilities, and none of those facilities talk to each other. A patient with sickle cell disease might have records at LUTH, a private clinic in Surulere, and a specialist in VI and none of those doctors can see what the others have done. The patient is expected to remember their own drug names, dosages, and diagnoses across years of care. When they can't, things go wrong.<br /><br />
                            Existing personal health record systems were built for structured EHR environments in Western hospitals. They assume your data is already digital, already organised, and already in one place. For most Nigerians, none of that is true. Their records are PDFs, photos of lab printouts, and handwritten prescription slips & discharge summaries. I wanted to build something that works with what patients already have.</p>
                    </Card>
                    {/* Fun fact */}

                    <Card className='md:col-span-2 lg:col-span-2 flex flex-col justify-center'>
                        <h2 className='font-mono text-theme-lime uppercase tracking-tighter text-xl mb-4'>Building with:</h2>
                        <p>
                            Next.js · FastAPI · PostgreSQL · ChromaDB · Supabase · BioBERT · Claude API · Sentence Transformers · Celery
                        </p>
                    </Card>
                    {/* Name pronunciation? */}
                    {/* <Card className="md:col-span-2 lg:col-span-2 flex  justify-between items-center gap-6">
                        <h2 className='font-mono text-theme-lime uppercase tracking-tighter text-xl mb-2'>Software References</h2>
                        <ul>
                            <li><a href="https://augusthealth.com" target="_blank" rel="noopener noreferrer" className='underline'>augusthealth.com</a></li>
                            <li><a href="https://www.vibrantpractice.com" target="_blank" rel="noopener noreferrer" className='underline'>vibrantpractice.com</a></li>
                        </ul>
                    </Card> */}
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
                        <h2 className='font-mono text-theme-lime uppercase tracking-tighter text-xl mb-4'>The AI Part </h2>
                        <p>
                            Yes, there is an AI integration. No, it is not a chatbot wrapper. The system uses two distinct AI components working in sequence.<br /><br />
                            The first is a Named Entity Recognition pipeline built on BioBERT — a language model pre-trained on biomedical literature. When a patient uploads a document, BioBERT reads it and automatically identifies the clinical entities: drug names, diagnoses, symptoms, lab values, dates. These are highlighted in the document viewer by category, so a patient can scan a five-page discharge summary and immediately see what matters. <br /><br />
                            The second is a Retrieval-Augmented Generation pipeline. When a patient asks a question — "what was my last haemoglobin result?" or "have I ever been prescribed this drug before?" — the system encodes the question, searches the patient's uploaded documents for the most relevant passages, and passes those passages to an API to generate a grounded, cited answer. The model only answers from what it finds in the documents. If the answer isn't there, it says so. This constraint is non-negotiable in a medical context.
                        </p>

                    </Card>
                    {/* work */}
                    <Card className='md:col-span-4 lg:col-span-2 lg:row-span-3 flex flex-col justify-center items-left gap-6'>
                        <h2 className='font-mono text-theme-lime uppercase tracking-tighter text-xl mb-4'>A note on scope </h2>
                        <p>This is a final year project, which means I am building an MVP with clearly defined boundaries. Multi-language support for Pidgin and Nigerian languages, a clinician-facing portal, real-time EHR integration, mobile application development, and offline support are all documented as future work — not omissions. The point is not to build everything. It is to build the right things well enough to demonstrate that this is worth building properly.
                        </p>
                    </Card>


                </div>
            </div>

        </div >
    )
}

export default page