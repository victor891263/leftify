<template>
    <div id="about">
        <h1>What does it mean to be politically left-wing?</h1>
        <p>Being left-wing means believing in the principles of social justice, equality, and progressive change. Being left-wing means advocating for policies that prioritize the well-being and needs of marginalized and vulnerable communities, rather than prioritizing the interests of the wealthy or powerful.<br><br>Left-wing ideology is grounded in the belief that government has a responsibility to ensure that everyone has access to basic necessities such as healthcare, education, and housing. It also means advocating for policies that protect workers' rights, such as fair wages, safe working conditions, and the right to unionize.<br><br>In addition, left-wing ideology supports measures that combat systemic oppression, discrimination, and inequality. This includes policies to combat racism, sexism, homophobia, and other forms of discrimination.<br><br>Left-wing politics are also associated with progressive social and environmental policies. This means advocating for policies that address climate change, protect the environment, and promote sustainable development.</p>
        <h2>What's the point of this test?</h2>
        <div>
            <p>The test is made by <a href="https://www.github.com/victor891263" target="_blank">victor</a>, a full-stack developer who also happens to read a lot about politics and economics, and who was quite frustruated with how most political tests found online are either:</p>
            <ol>
                <li>Not detailed enough, or in other words, too vague to the point where countless interpretations could be made, or</li>
                <li>Use political terminology that a common person is unlikely to be familiar with without providing an explanation.</li>
            </ol>
            <p>This test is supposed to fix those problems.</p>
        </div>
    </div>
</template>

<style lang="scss">
#about {
    display: grid;
    grid-row-gap: 2rem;
    max-width: 540px;

    p {
        white-space: pre-line;
    }

    h2 {
        margin-top: 2rem;
    }

    > div {
        display: grid;
        grid-row-gap: 1.125rem;

        ol {
            display: grid;
            grid-row-gap: 1.125rem;
            margin-left: 1rem;
        }

        li {
            line-height: 1.6;
        }
    }

    
}
</style>