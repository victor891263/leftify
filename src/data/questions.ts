import { IQuestion } from "@/types"

const questions: IQuestion[] = [
    // COLLECTIVE GOOD
    {
        id: 1,
        body: `Pick the statement that you agree with the most.`,
        choices: [
            {
                id: 1,
                body: `If, in order to obtain something, someone doesn't have to give up anything in return, then it is generally a positive thing, assuming that nobody is hurt in the process.`,
                reductions: [1]
            },
            {
                id: 2,
                body: 'It is fundamentally wrong for anyone to get anything for free; people should have to put in effort for what they want.',
                reductions: [2]
            },
            {
                id: 3,
                body: `Skip this question.`,
                removals: [1, 2]
            }
        ]
    },
    {
        id: 2,
        body: 'We should strive to ensure that our society is fully capable of providing everyone the means to sustain themselves, even if no same or any amount of contribution can be expected back from them.',
        choices: [
            {
                id: 1,
                body: 'I agree.',
                reductions: [1]
            },
            {
                id: 2,
                body: 'I disagree.',
                reductions: [2]
            },
            {
                id: 3,
                body: `Skip this question.`,
                removals: [1, 2]
            }
        ]
    },
    {
        id: 3,
        body: 'Pick the statement that you agree with the most.',
        choices: [
            {
                id: 1,
                body: `The fact that a few people are insanely rich while many don't have the means to even properly feed and house themselves is a problem that requires immediate tackling.`,
                reductions: [1]
            },
            {
                id: 2,
                body: 'There is nothing wrong with economic inequality; it is natural for more hardworking and intelligent individuals to own less wealth than those who are less hardworking and intelligent and this should not be intervened.',
                reductions: [2]
            },
            {
                id: 3,
                body: `Skip this question.`,
                removals: [1, 2]
            }
        ]
    },

    // SOCIAL JUSTICE
    {
        id: 4,
        body: 'There is nothing wrong with overcoming conservative/traditional beliefs on gender, family, marriage, and customs/norms and culture.',
        choices: [
            {
                id: 1,
                body: 'I agree.'
            },
            {
                id: 2,
                body: 'I disagree.',
                reductions: [2]
            },
            {
                id: 3,
                body: `Skip this question.`,
                removals: [2]
            }
        ]
    },
    {
        id: 5,
        body: `An exclusion from economic opportunities on the basis of race, gender, disability, religion, national origin, nationality or citizenship, and other factors which an individual didn't explicitly have a chance to choose to or not to be associated with, is what we should oppose.`,
        choices: [
            {
                id: 1,
                body: 'I agree.',
                reductions: [1]
            },
            {
                id: 2,
                body: 'I disagree.',
                reductions: [2, 3]
            },
            {
                id: 3,
                body: `Skip this question.`,
                removals: [1, 2, 3]
            }
        ],
        note: `In today's world, this translates to an advocacy for the removal of all restrictions, based on citizenship, on immigration, trade, and association`
    },
    {
        id: 6,
        body: `Although there are many occasions where religion has a positive impact on society, we should try to be as scientific as possible and rely on religious faith as little as possible when making economic and political decisions.`,
        choices: [
            {
                id: 1,
                body: 'I agree.'
            },
            {
                id: 2,
                body: 'I disagree.',
                reductions: [2, 5]
            },
            {
                id: 3,
                body: `Skip this question.`,
                removals: [2, 5]
            }
        ]
    },
    {
        id: 7,
        body: `Regarding specific groups of individuals which are more prone to discrimination and violence, special legal protections and privileges should be given to them until the matter is completely resolved.`,
        choices: [
            {
                id: 1,
                body: 'I agree.',
                reductions: [6]
            },
            {
                id: 2,
                body: 'I disagree.',
                reductions: [2]
            },
            {
                id: 3,
                body: `Skip this question.`,
                removals: [2, 6]
            }
        ]
    },

    // INTERNATIONALISM
    {
        id: 8,
        body: `<button data-name='state'>States</button> shouldn't be formed on the basis of nations, or in other words, nations shouldn't be allowed to exercise monopoly on violence to preserve themselves; both the founding and dissolution of nations are not the phenomena that should be prevented or controlled with the power of the monopoly on violence.`,
        choices: [
            {
                id: 1,
                body: 'I agree.'
            },
            {
                id: 2,
                body: 'I disagree.',
                reductions: [3]
            },
            {
                id: 3,
                body: `Skip this question.`,
                removals: [3]
            }
        ]
    },
    {
        id: 9,
        body: `Pick the statement that you agree with the most.`,
        choices: [
            {
                id: 1,
                body: 'Despite comprising of all social classes, liberation or self-determination of any nation is something we should always advocate for.',
                reductions: [3]
            },
            {
                id: 2,
                body: `Because a nation can consist of the capitalist class as well, we should focus on the emancipation of the working class; liberation should be on the basis of class and not other constructs like nation.`
            },
            {
                id: 3,
                body: `Skip this question.`,
                removals: [3]
            }
        ]
    },
    {
        id: 10,
        body: `Pick the statement that you agree with the most.`,
        choices: [
            {
                id: 1,
                body: 'We should mainly focus on the well-being of the working class in our nation and the working classes of other nations are supposed to look out for their own interests too.',
                reductions: [3]
            },
            {
                id: 2,
                body: 'The well-being of every member of the working class is important, regardless of which country they belong to. Therefore, we should not carry out actions that put the international working class at a disadvantage, even if it benefits the workers of our country.'
            },
            {
                id: 3,
                body: `Skip this question.`,
                removals: [3]
            }
        ]
    },
    {
        id: 11,
        body: `Various <button data-name'socialism'>socialist</button> nations should be united in a single union to collectively manage resources for the betterment of all at the expense of none. The movement between different nations wouldn't be restricted and every citizen would have the right to voting and access to public goods and services across the union.`,
        choices: [
            {
                id: 1,
                body: 'I agree.'
            },
            {
                id: 2,
                body: 'I disagree.',
                reductions: [3]
            },
            {
                id: 3,
                body: `Skip this question.`,
                removals: [3]
            }
        ],
        note: 'This is also an advocacy for international socialist unity.'
    },
    {
        id: 12,
        body: `The working class between nations of similar level of development has more in common with each other than the capitalist class of their respective nations.`,
        choices: [
            {
                id: 1,
                body: 'I agree.'
            },
            {
                id: 2,
                body: 'I disagree.',
                reductions: [3]
            },
            {
                id: 3,
                body: `Skip this question.`,
                removals: [3]
            }
        ],
        note: 'For example, a member of the working class of Japan has more in common with a member of the working class of France than a member of the capitalist class of Japan. Similarly, an Indian worker has more in common with a Nigerian worker than an Indian capitalist.'
    },

    // ANTI-CAPITALISM
    {
        id: 13,
        body: `It is inaccurate to say that the tendency to accumulate material possessions or private property is inherent to humans and that only systems which make individuals exploit this "selfishness" for their own survival will work.

The reality is that there are more ways for us to find fulfillment than accumulation of wealth - one example being doing the labor we enjoy, which could suggest that lack of material reward might not always lead to avoidance of work. In addition, our behvavior is largely influenced by socioeconomic conditions, demonstrated by the fact that our values changed as systems changed throughout history.`,
        choices: [
            {
                id: 1,
                body: 'I agree.'
            },
            {
                id: 2,
                body: 'I disagree.',
                reductions: [4, 5]
            },
            {
                id: 3,
                body: `Skip this question.`,
                removals: [4, 5]
            }
        ]
    },
    {
        id: 14,
        body: `It is not preferrable to have the means of production privately owned since, legally speaking, private individuals are completely unaccountable to the majority; private individuals are not required by law to look out for the interests of the people nor private ownership is subject to the will of the people.`,
        choices: [
            {
                id: 1,
                body: 'I agree.'
            },
            {
                id: 2,
                body: 'I disagree.',
                reductions: [4]
            },
            {
                id: 3,
                body: `Skip this question.`,
                removals: [4]
            }
        ]
    },
    {
        id: 15,
        body: `While <button data-name='capitalism'>capitalism's</button> market economy may be able to allocate resources efficiently, the purpose of this efficient resource allocation is to maximize profits and not for the collective well-being of the people. This is, for example, demonstrated by an increasing wealth equality along with the destruction of the environment on a global scale.`,
        choices: [
            {
                id: 1,
                body: 'I agree.'
            },
            {
                id: 2,
                body: 'I disagree.',
                reductions: [2, 4]
            },
            {
                id: 3,
                body: `Skip this question.`,
                removals: [2, 4]
            }
        ]
    },
    {
        id: 16,
        body: `A world without workers - a world where everyone refuses to do any labor cannot simply function. On the other hand, a world without capitalists - a world where the means of production are not owned privately by anyone, will flourish.`,
        choices: [
            {
                id: 1,
                body: 'I agree.'
            },
            {
                id: 2,
                body: 'I disagree.',
                reductions: [4]
            },
            {
                id: 3,
                body: `Skip this question.`,
                removals: [4]
            }
        ]
    },
    {
        id: 17,
        body: `It is regrettable that capitalists have disproportionally more power than the workers due to (1) differences in wealth (2) the fact that workers usually have no choice but to work for capitalists to sustain (3) the supreme authority capitalists have over workers via the employer-employee relationship.`,
        choices: [
            {
                id: 1,
                body: 'I agree.'
            },
            {
                id: 2,
                body: 'I disagree.',
                reductions: [4]
            },
            {
                id: 3,
                body: `Skip this question.`,
                removals: [4]
            }
        ]
    },
    {
        id: 18,
        body: `The fact that in a <button data-name='liberal democracy'>liberal democracy</button>, even though each citizen has the same right to vote as everyone else, the well-being of the working class is often neglected in favor of the well-being of the capitalist class is proof that a different form of governance/organization is needed if the interests of the people are to be secured.`,
        choices: [
            {
                id: 1,
                body: 'I agree.',
                reductions: [7]
            },
            {
                id: 2,
                body: 'I disagree.',
                reductions: [4, 6]
            },
            {
                id: 3,
                body: `Skip this question.`,
                removals: [4, 6, 7]
            }
        ]
    },
    {
        id: 19,
        body: `<button name='private property'>Private property</button> is inherently authoritarian and requires violence to exist because fundamentally, when a person declares an object as their <button name='private property'>private property</button>, that means that said person will use violence to remove everybody else's access to that object; said person will use violence to ensure only they have access to that object.`,
        choices: [
            {
                id: 1,
                body: 'I agree.'
            },
            {
                id: 2,
                body: 'I disagree.',
                reductions: [4]
            },
            {
                id: 3,
                body: `Skip this question.`,
                removals: [4]
            }
        ],
        note: 'For instance, think of China declaring that the moon is their property and they will shoot down any non-Chinese spacecraft that approaches the moon, or Jeff Bezos declaring that the Atlantic Ocean is his and proceeding to hire a private military and ordering them to destroy any un-approved ship or aircraft that enters the Atlantic Ocean.'
    },
    {
        id: 20,
        body: `In today's world, you need to pay money to get most goods and services, which essentially means that the poor don't have access to them most of the time. This also explains why what is made and how much of them are made are based only on the demand of those who can afford.
        
A better way would be to not take purchasing power into account when determining what and how much to produce. This would also ensure that an individual has access to goods and services they need, regardless of their ability to pay.`,
        choices: [
            {
                id: 1,
                body: 'I agree.'
            },
            {
                id: 2,
                body: 'I disagree.',
                reductions: [2, 4]
            },
            {
                id: 3,
                body: `Skip this question.`,
                removals: [2, 4]
            }
        ]
    },

    // SCIENTIFIC SOCIALISM
    {
        id: 21,
        body: `Throughout human history, several different <button data-name='class'>classes</button> can be defined, based on the relationship to the means of production, and conflict between <button data-name='class'>classes</button> is a force that has influenced much of our history.`,
        choices: [
            {
                id: 1,
                body: 'I agree.'
            },
            {
                id: 2,
                body: 'I disagree.',
                reductions: [5]
            },
            {
                id: 3,
                body: `Skip this question.`,
                removals: [5]
            }
        ]
    },
    {
        id: 22,
        body: `Ideas do not come into existence just by themselves but are shaped by and reflect the material conditions of not only the thinker (or in other words, the thinker's socioeconomic status), but also the time period in which the idea was born in (or in other words, the socioeconomic structure and technological advancement of human society during that time period).`,
        choices: [
            {
                id: 1,
                body: 'I agree.'
            },
            {
                id: 2,
                body: 'I disagree.',
                reductions: [5]
            },
            {
                id: 3,
                body: `Skip this question.`,
                removals: [5]
            }
        ]
    },
    {
        id: 23,
        body: `In extremely simple terms, the capitalist system consists of conflicts, or contradictions inherent to it, such as the opposing interests of the <button data-name='bourgeoisie'>bourgeoisie</button> and the <button data-name='proletariat'>proletariat</button>, the occurrence of “boom and bust cycles”, and the tendency of businesses to expand automation, which usually results in a lower rate of profit, better known as return on investment (ROI), over a time period. These conflicts cannot be resolved other than by the replacement of private property and for-profit production with <button data-name='common property'>common property</button> and need-based production.`,
        choices: [
            {
                id: 1,
                body: 'I agree.'
            },
            {
                id: 2,
                body: 'I disagree.',
                reductions: [5]
            },
            {
                id: 3,
                body: `Skip this question.`,
                removals: [5]
            }
        ]
    },
    {
        id: 24,
        body: `Throughout human history, various economic systems come and go. <button data-name='feudalism'>Feudalism</button> was replaced by capitalism, which will eventually be replaced by socialism. This replacement will be brought about because of the conflicts, or contradictions, that are introduced by capitalism and the only permanent way to resolve these conflicts is to replace capitalism with socialism.
        
To put this simply, the replacement of capitalism with socialism is inevitable due to the self-destructive nature of capitalism.`,
        choices: [
            {
                id: 1,
                body: 'I agree.'
            },
            {
                id: 2,
                body: 'I disagree.',
                reductions: [5]
            },
            {
                id: 3,
                body: `Skip this question.`,
                removals: [5]
            }
        ]
    },
    {
        id: 25,
        body: `The utility of something expands when labor turns it into something different (for example - it is human labor that turns cloth into clothing, which is usually more useful than cloth). In other words, labor is what adds value to something; labor is the source of all value.

Therefore, it can be said that capitalists, by only providing access to resources, add no value in the production lifecycle. Similar analysis can be applied as well to landlords and entities who collect interest via loans.`,
        choices: [
            {
                id: 1,
                body: 'I agree.'
            },
            {
                id: 2,
                body: 'I disagree.',
                reductions: [5]
            },
            {
                id: 3,
                body: `Skip this question.`,
                removals: [5]
            }
        ]
    },

    // ANTI-AUTHORITY
    {
        id: 26,
        body: `Pick the statement that you agree with the most.`,
        choices: [
            {
                id: 1,
                body: `The systems that involve exercising <button data-name='authority'>authority</button> tend to concentrate power in the hands of a minority. By only implementing horizontal or <button data-name='bottom-up structure'>bottom-up</button> structures can we combat this unacceptable tendency.`
            },
            {
                id: 2,
                body: `Even though vertical or <button data-name='top-down structure'>top-down</button> structures may lead to concentration of power, this doesn't necessarily mean they should be avoided at all times as they might prove useful in some cases.`,
                reductions: [6]
            },
            {
                id: 3,
                body: `Skip this question.`,
                removals: [6]
            }
        ]
    },
    {
        id: 27,
        body: `Which type of actions do you think are more effective?`,
        choices: [
            {
                id: 1,
                body: 'Decentralized mass spontaneous actions.'
            },
            {
                id: 2,
                body: `Orders given by a centralized institution.`,
                reductions: [6]
            },
            {
                id: 3,
                body: `Skip this question.`,
                removals: [6]
            }
        ]
    },
    {
        id: 28,
        body: `Freedom of speech, or in other words, the right of individuals to express their opinions without fear of retaliation involving violence, must be protected.

In addition, freedom of association, or in other words, the right of individuals to dissociate from any group without fear of retaliation involving violence, must also be protected.`,
        choices: [
            {
                id: 1,
                body: 'I agree.'
            },
            {
                id: 2,
                body: 'I disagree.',
                reductions: [6, 7]
            },
            {
                id: 3,
                body: `Skip this question.`,
                removals: [6, 7]
            }
        ]
    },
    {
        id: 29,
        body: `Pick the statement that you agree with the most.`,
        choices: [
            {
                id: 1,
                body: 'Violence must only be used in an act of individual self-defense or in a revolution against authoritarianism.'
            },
            {
                id: 2,
                body: `Although rare, there can be situations more than just individual self-defense where it is justified to use violence - for example, when the majority's survival or well-being is involved and the decision is democratic.`,
                reductions: [6, 7]
            },
            {
                id: 3,
                body: `Skip this question.`,
                removals: [6, 7]
            }
        ]
    },

    // REFORMISM
    {
        id: 30,
        body: `Pick the statement that you agree with the most.`,
        choices: [
            {
                id: 1,
                body: 'Although capitalism has many flaws, they can be mitigated via proper regulations along with the implementation of a social safety net. This lets us enjoy the benefits of capitalism without its drawbacks.',
                reductions: [5, 6]
            },
            {
                id: 2,
                body: `Even if the reforms can be introduced, not only they are highly prone to being rolled back in the future, but they also do not do away with capitalism's inherent destructive characteristics such as private property and the market of for-profit firms. Socialism is the only permanent solution.`,
                reductions: [7]
            },
            {
                id: 3,
                body: `Skip this question.`,
                removals: [5, 6, 7]
            }
        ]
    },
    {
        id: 31,
        body: `Pick the statement that you agree with the most.`,
        choices: [
            {
                id: 1,
                body: 'Although a revolution is necessary and preferrable sometimes, It is possible to work towards socialism via participating in elections and implementing policies that benefit the people. Therefore, this should be our main focus.',
                reductions: [5, 6]
            },
            {
                id: 2,
                body: `Although we shouldn't completely avoid electoralism, the nature of capitalism makes any reformist efforts mostly futile and only a majority-supported revolution has the best chance of replacing capitalism with socialism. Thus, we should mainly focus on direct action and revolutionary strategy.`,
                reductions: [7]
            },
            {
                id: 3,
                body: `Skip this question.`,
                removals: [5, 6, 7]
            }
        ]
    },
    {
        id: 32,
        body: `While capitalism's market economy is not only largely controlled by the capitalist class but also only efficient at allocating resources to maximize profits, a <button data-name='planned economy'>planned economy</button> would be able to replicate this efficiency and utilize it for the goals which are democratically chosen by the people, which could range from fullfilling everyone's needs to combating climate change.`,
        choices: [
            {
                id: 1,
                body: 'I agree.',
                reductions: [7]
            },
            {
                id: 2,
                body: `I disagree.`,
                reductions: [5]
            },
            {
                id: 3,
                body: `Skip this question.`,
                removals: [5, 7]
            }
        ]
    },
]

export default questions