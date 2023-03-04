<template>
    <div id="about">
        <h1>About</h1>
        <div>
            <h2>Left-wing politics</h2>
            <p>Being left-wing means believing in the principles of social justice, equality, and progressive change. This means advocating for policies that promote values such as:</p>
            <ul>
                <li>
                    <p><b>Not for a few, but for the many:</b> prioritize the well-being and needs of marginalized and vulnerable communities, rather than prioritizing the interests of the wealthy or powerful.</p>
                </li>
                <li>
                    <p><b>A fulfilling life for all:</b> society has an obligation to ensure that everyone has access to basic necessities such as healthcare, education, and housing. This also means advocating for policies that protect workers' rights, such as fair wages, safe working conditions, and the right to unionize.</p>
                </li>
                <li>
                    <p><b>Anti-oppression and anti-discrimination:</b> supports measures that combat systemic oppression, discrimination, and inequality. This includes policies to combat racism, sexism, homophobia, and other forms of discrimination.</p>
                </li>
                <li>
                    <p><b>For the good of our planet:</b> advocating for progressive social and environmental policies that address climate change, protect the environment, and promote sustainable development.</p>
                </li>
            </ul>
        </div>
        <div>
            <h2>Purpose of the test</h2>
            <p>The test is made by <a href="https://www.github.com/victor891263" target="_blank">victor</a>, a full-stack developer who also happens to read a lot about politics and economics. This website is an attempt to create a test better than what's commonly found on the internet by introducing improvements such as:</p>
            <ul>
                <li>
                    <p><b>Well-expanded positions:</b> each question is written in a way that it is easily understandable, to prevent the problem of being too vague to the point where countless interpretations could be made; and</p>
                </li>
                <li>
                    <p><b>No unexplained political jargon:</b> the questions either are clear of uncommon political terminology that a regular person may not be familiar with, or the questions include explanations if such terms are ever used.</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss">
#about {
    display: grid;
    grid-row-gap: 4rem;
    max-width: 720px;

    h1 {
        font-size: 2.125rem;
    }

    h2 {
        font-size: 1.625rem;
        margin-bottom: 0.8rem;
    }

    ul {
        display: grid;
        grid-row-gap: 1.2rem;
        margin-left: 1rem;
    }

    > div {
        display: grid;
        grid-row-gap: 1.2rem;

        ol {
            display: grid;
            grid-row-gap: 1.125rem;
            margin-left: 1rem;
        }
    }
}
</style>