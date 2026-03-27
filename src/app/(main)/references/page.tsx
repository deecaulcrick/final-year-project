import React from 'react'
import BookRef from '@/components/ui/BookRef'

const references = [
    {
        "title": "Clinical decision support systems: State of the art",
        "author": "Berner, E. S.",
        "link": ""
    },
    {
        "title": "Multi-tenant SaaS applications: Maintenance dream or nightmare?",
        "author": "Bezemer, C. P., & Zaidman, A.",
        "link": ""
    },
    {
        "title": "Language models are few-shot learners",
        "author": "Brown, T. B., Mann, B., Ryder, N., Subbiah, M., Kaplan, J., Dhariwal, P., et al.",
        "link": ""
    },
    {
        "title": "Achieving a nationwide learning health system",
        "author": "Friedman, C. P., Wong, A. K., & Blumenthal, D.",
        "link": "https://doi.org/10.1126/scitranslmed.3001456"
    },
    {
        "title": "Generative adversarial nets",
        "author": "Goodfellow, I., Pouget-Abadie, J., Mirza, M., Xu, B., Warde-Farley, D., Ozair, S., Courville, A., & Bengio, Y.",
        "link": ""
    },
    {
        "title": "Building expert systems",
        "author": "Hayes-Roth, F., Waterman, D. A., & Lenat, D. B.",
        "link": ""
    },
    {
        "title": "Effects of clinical decision-support systems on practitioner performance and patient outcomes",
        "author": "Jaspers, M. W. M., Smeulers, M., Vermeulen, H., & Peute, L. W.",
        "link": "https://doi.org/10.1136/amiajnl-2011-000094"
    },
    {
        "title": "Speech and language processing (3rd ed. draft)",
        "author": "Jurafsky, D., & Martin, J. H.",
        "link": "https://web.stanford.edu/~jurafsky/slp3/"
    },
    {
        "title": "Auto-encoding variational Bayes",
        "author": "Kingma, D. P., & Welling, M.",
        "link": "https://arxiv.org/abs/1312.6114"
    },
    {
        "title": "Deep learning",
        "author": "LeCun, Y., Bengio, Y., & Hinton, G.",
        "link": "https://doi.org/10.1038/nature14539"
    },
    {
        "title": "BioBERT: A pre-trained biomedical language representation model for biomedical text mining",
        "author": "Lee, J., Yoon, W., Kim, S., Kim, D., Kim, S., So, C. H., & Kang, J.",
        "link": "https://doi.org/10.1093/bioinformatics/btz682"
    },
    {
        "title": "Retrieval-augmented generation for knowledge-intensive NLP tasks",
        "author": "Lewis, P., Perez, E., Piktus, A., Petroni, F., Karpukhin, V., Goyal, N., et al.",
        "link": ""
    },
    {
        "title": "A proposal for the Dartmouth Summer Research Project on Artificial Intelligence",
        "author": "McCarthy, J., Minsky, M. L., Rochester, N., & Shannon, C. E.",
        "link": ""
    },
    {
        "title": "Machine learning",
        "author": "Mitchell, T. M.",
        "link": ""
    },
    {
        "title": "Training language models to follow instructions with human feedback",
        "author": "Ouyang, L., Wu, J., Jiang, X., Almeida, D., Wainwright, C. L., Mishkin, P., et al.",
        "link": ""
    },
    {
        "title": "Artificial intelligence: A modern approach (4th ed.)",
        "author": "Russell, S., & Norvig, P.",
        "link": ""
    },
    {
        "title": "CloudAna: A general cloud analytics platform",
        "author": "Saripalli, P., & Bisht, G.",
        "link": ""
    },
    {
        "title": "Large language models encode clinical knowledge",
        "author": "Singhal, K., Azizi, S., Tu, T., Mahdavi, S. S., Wei, J., Chung, H. W., et al.",
        "link": "https://doi.org/10.1038/s41586-023-06291-2"
    },
    {
        "title": "High-performance medicine: The convergence of human and artificial intelligence",
        "author": "Topol, E. J.",
        "link": "https://doi.org/10.1038/s41591-018-0300-7"
    },
    {
        "title": "Computing machinery and intelligence",
        "author": "Turing, A. M.",
        "link": "https://doi.org/10.1093/mind/LIX.236.433"
    },
    {
        "title": "Attention is all you need",
        "author": "Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A. N., Kaiser, L., & Polosukhin, I.",
        "link": ""
    },
    {
        "title": "Clinical information extraction applications: A literature review",
        "author": "Wang, Y., Wang, L., Rastegar-Mojarad, M., Moon, S., Shen, F., Afzal, N., et al.",
        "link": "https://doi.org/10.1016/j.jbi.2017.11.011"
    },
    {
        "title": "Retrieval meets long context large language models",
        "author": "Xu, P., Ping, Y., Tang, X., Liu, W., Li, L., Yu, Z., & Luo, J.",
        "link": "https://doi.org/10.48550/arXiv.2310.03025"
    }
]

function page() {
    return (
        <div className="px-8 md:px-16 py-16">
            <div className="w-full">
                <h2 className="font-heading font-normal text-5xl tracking-tight mb-4">References</h2>
                <p className="font-body text-lg">A collection of useful resources and references.
                </p>
<div>
    {references.map((ref, index) => (
        <BookRef key={index} title={ref.title} author={ref.author} link={ref.link} />
    ))}

</div>
            </div>
        </div>
    )
}

export default page