import {
    BaseStyles,
    Badge,
    Box,
    Button,
    Card,
    Checkbox,
    Container,
    Flex,
    Grid,
    Heading,
    Input,
    Label,
    Link,
    NavLink,
    Radio,
    Select,
    Slider,
    Text,
    Textarea
} from 'theme-ui'
import Head from 'next/head'
import Meta from '@hackclub/meta'
import theme from '@hackclub/theme'
import ColorSwitcher from '../components/color-switcher'
import Icon from '@hackclub/icons'
import ProjectDisplay from '../components/ProjectDisplay.js'

const ExplorePage = () => (
<>
    <Head>
    <title>Explore my Projects</title>
    <Meta
        name="Explore"
        description="Explore the amazing mini-projects that uvacoder has created."
    />
    </Head>
    <Box as="header" sx={{ bg: 'sheet', color: 'text' }}>
    <Container sx={{ pt: 5, pb: [3, 4], textAlign: 'center' }}>
        <ColorSwitcher />
        <Heading as="h1" variant="title" color="red">
        <Icon glyph="explore" size={64} style={{ verticalAlign: 'bottom' }} /> Explore My Projects
        </Heading>
        <Text as="p" variant="subtitle" mt={3}>
        Explore mini-projects made by <Link href="https://github.com/uvacoder">uvacoder</Link>.
        </Text>
        <Container variant="narrow" sx={{ mt: 3, mb: 4 }}>
            <Label style={{ position: 'relative' }}> {/* The search feature has not been implemented yet */}
                <Icon glyph="search" size={32} style={{ position: 'absolute', top: '7px', left: '7px' }} />
                <Input placeholder="Search" style={{ border: '2px solid ' + theme.colors.muted, paddingLeft: '40px',
                    "::WebkitInputPlaceholder": theme.colors.muted,
                    "::MozPlaceholder": theme.colors.muted
                }} />
            </Label>
        </Container>
        <Grid
        gap={4}
        columns="auto auto auto"
        sx={{
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 2,
            mt: 3,
            mb: 4,
            a: { color: 'muted', transition: 'color .125s ease-in-out' }
        }}
        >
        <NavLink href="https://github.com/uvacoder">GitHub</NavLink>
        <NavLink href="https://abclinks.vercel.app">MyLinks</NavLink>
        <NavLink href="https://uvacoderportfolio.vercel.app">Portfolio</NavLink>
        </Grid>
    </Container>
    </Box>
    <Box
    as="main"
    sx={{ bg: 'background', color: 'text', py: 4, h2: { mt: 4 } }}
    >
        <Heading variant="title" style={{ textAlign: 'center' }}>Featured</Heading>
        <br />
        <ProjectDisplay projects={[
            {
                name: "Portfolios4me",
                description: "My own collection of portfolios I like.",
                image: "https://raw.githubusercontent.com/Uvacoder/abc-portfolios4me/main/screenshot-portfolios4me.png",
                url: "https://portfolios4me.vercel.app",
                author: "uvacoder"
            },
            {
                name: "Githubuser Viewer",
                description: "A nice webapp using github-api to search a users stats.",
                image: "https://raw.githubusercontent.com/Uvacoder/abc-githubuser-view/master/screenshot-githubuser-view.png",
                url: "https://githubuser-view.vercel.app",
                author: "uvacoder"
            }, 
            {
                name: "HackerNews",
                bescription: "A webapp using nuxtjs to reproduce hackernews",
                image: "https://raw.githubusercontent.com/Uvacoder/uva-portfolios-ideas-collection/main/screenshot-portfolios4ideas.png",
                url: "https://hackernews4u.vercel.app/news/1",
                author: "uvacoder"
            },
            {
                name: "Portfolios for Ideas",
                bescription: "A collection of great portfolios to give me ideas for future projects",
                image: "https://raw.githubusercontent.com/Uvacoder/hackernews4u-uva/master/screenshot-hackernews4u.png",
                url: "https://portfolios4ideas.vercel.app",
                author: "uvacoder"
            },
            {
                name: "Playground for Flexbox",
                bescription: "A great webapp to create flexbox grids",
                image: "https://raw.githubusercontent.com/Uvacoder/uva-flexbox-guide/master/screenshot-playground4flexbox.png",
                url: "https://playground4flexbox.vercel.app/",
                author: "uvacoder"
            },
            {
                name: "Playground for BoxShadows",
                bescription: "A webapp to create box shadows",
                image: "https://raw.githubusercontent.com/Uvacoder/uva-boxshadows-guide/main/screenshot-playground4boxshadow.png",
                url: "https://playground4boxshadow.vercel.app/",
                author: "uvacoder"
            },
            {
                name: "Collection of GitHub Readme",
                bescription: "A collection of great github readme gifs",
                image: "https://raw.githubusercontent.com/Uvacoder/github-readme-collection/master/screenshot-github-readme-collection.png",
                url: "https://uvacoder.github.io/github-readme-collection/",
                author: "uvacoder"
            },
            {
                name: "Collection of SvelteKit",
                bescription: "A collection of sites built on sveltekit",
                image: "https://raw.githubusercontent.com/Uvacoder/uva-collect4sveltekit/main/screenshot-collect4sveltekit.png",
                url: "https://collect4sveltekit.vercel.app/",
                author: "uvacoder"
            },
            {
                name: "Awesome Newsletters",
                bescription: "A curated collection of programming newsletters",
                image: "https://raw.githubusercontent.com/Uvacoder/awesome-newsletters/master/screenshot-awesome-newletters.png",
                url: "https://uvacoder.github.io/awesome-newsletters/",
                author: "uvacoder"
            },
            {
                name: "Search Awesome Lists",
                bescription: "A great tool to search all the awesome lists repos",
                image: "https://raw.githubusercontent.com/Uvacoder/uva-awesome-search/main/screenshot-search4awesome.png",
                url: "https://search4awesome.vercel.app/#/",
                author: "uvacoder"
            },
            {
                name: "Woodworker4303 Repos Collection",
                bescription: "A collection of repos from woodworker4303",
                image: "https://raw.githubusercontent.com/Uvacoder/repos4woodworker4303-4303/main/screenshot-repos4woodworker4303.png",
                url: "https://repos4woodworker4303.vercel.app",
                author: "uvacoder"
            },
            {
                name: "Colortopia",
                bescription: "A great collection and tools for gradients",
                image: "https://raw.githubusercontent.com/Uvacoder/uva-colortopia-4303/master/screenshot-colortopia.png",
                url: "https://colortopia.vercel.app",
                author: "uvacoder"
            },
            {
                name: "DevTools for CSS",
                bescription: "A collection tools to help any programmer with css",
                image: "https://raw.githubusercontent.com/Uvacoder/uva-devtools-4-css-4303/master/screenshot-devtools4css.png",
                url: "https://devtools4css.vercel.app",
                author: "uvacoder"
            },
            {
                name: "Starter for cards and grids",
                bescription: "A collection tools to help any programmer with css",
                image: "https://raw.githubusercontent.com/Uvacoder/uva-grid-cards-4303/main/screenshot-uvacardsngrids.png",
                url: "https://uvacardsngrids.vercel.app",
                author: "uvacoder"
            },
            {
                name: "ColorFinder",
                bescription: "A quick and easy app to find colors in an image",
                image: "https://raw.githubusercontent.com/Uvacoder/uva-colorfinder-4303/main/screenshot-colorfinder.png",
                url: "https://colorfinder.vercel.app",
                author: "uvacoder"
            },
            {
                name: "Shades4Tailwind",
                bescription: "A great app to help you generate shades for tailwindcss",
                image: "https://raw.githubusercontent.com/Uvacoder/uva-shades4tailwind-4303/master/screenshot-shades4tailwind.png?token=GHSAT0AAAAAABZWJ5Q2KDLDPRDIWMZPKYXAY6IYYWQ",
                url: "https://shades4tailwind.vercel.app",
                author: "uvacoder"
            },
            {
                name: "Pics4Code",
                bescription: "A simple app to create great images of your code",
                image: "https://raw.githubusercontent.com/Uvacoder/uva-images-4-code-4303/main/screenshot-pics4code.png",
                url: "https://pics4code.vercel.app",
                author: "uvacoder"
            },
            {
                name: "Cover Card Generator",
                bescription: "A quick webapp to generate cover pics for your blogs",
                image: "https://raw.githubusercontent.com/Uvacoder/uva-img4cover-4303/main/screenshot-img4cover.png",
                url: "https://img4cover.vercel.app",
                author: "uvacoder"
            },
            {
                name: "MonitorMe",
                bescription: "A monitoring service for my websites",
                image: "https://raw.githubusercontent.com/Uvacoder/monitorme/master/screenshot-monitorme.png",
                url: "https://uvacoder.github.io/monitorme/",
                author: "uvacoder"
            },
            {
                name: "Cover Card Generator",
                bescription: "A quick webapp to generate cover pics for your blogs",
                image: "https://raw.githubusercontent.com/Uvacoder/uva-img4cover-4303/main/screenshot-img4cover.png",
                url: "https://img4cover.vercel.app",
                author: "uvacoder"
            },
            {
                name: "Cover Card Generator",
                bescription: "A quick webapp to generate cover pics for your blogs",
                image: "https://raw.githubusercontent.com/Uvacoder/uva-img4cover-4303/main/screenshot-img4cover.png",
                url: "https://img4cover.vercel.app",
                author: "uvacoder"
            }                            
        ]} style={{ }} />

        <Container variant="wide" style={{  }}>
            {/*
            <Heading variant="headline">Text</Heading>
            <Card>
            {Object.keys(theme.text).map(key => {
                const Component = key.includes('head') ? Heading : Text
                return (
                <Component key={key} variant={key} sx={{ mt: 0, mb: 3 }}>
                    {key}
                </Component>
                )
            })}
            </Card>
            <Card as={BaseStyles} sx={{ mt: [3, 4], p: { fontSize: 2 } }}>
            <p>
                This is a whole paragraph of text, include{' '}
                <code>code like this</code>, as well as{' '}
                <a href="https://hackclub.com/">
                <code>linked code</code>
                </a>
                {' & '}
                <a href="https://hackclub.com/">regular links</a>. The paragraph
                ended up being 1 sentence, but now I guess it’s <strong>two</strong>
                .
            </p>
            <pre>
                <code>Here’s a code block! No highlighting to be found.</code>
            </pre>
            </Card>
            <Heading variant="headline">Buttons</Heading>
            {Object.keys(theme.buttons).map(key => (
            <Button key={key} variant={key} sx={{ mr: 3, mb: 3 }}>
                {key} btn
            </Button>
            ))}
            <Heading variant="headline">Forms</Heading>
            <Grid gap={3} columns={[null, 2]} as="form" variant="cards.sunken">
            <Label>
                Full name
                <Input placeholder="Zach Latta" />
            </Label>
            <Label>
                How are you primarily associated with Hack Club?
                <Select>
                <option value="" disabled hidden>
                    Select one…
                </option>
                <option value="club-leader">I lead a club</option>
                <option value="club-member">I am a club member</option>
                <option value="slack-member">I am active on Slack</option>
                <option value="alum">I am a Hack Club alum</option>
                <option value="none">None of the above</option>
                </Select>
            </Label>
            <Label variant="labelHoriz">
                <Checkbox />
                Remember me
            </Label>
            <Flex sx={{ flexWrap: 'wrap' }}>
                <Label variant="labelHoriz">
                <Radio name="letter" /> Alpha
                </Label>
                <Label variant="labelHoriz">
                <Radio name="letter" /> Bravo
                </Label>
                <Label variant="labelHoriz">
                <Radio name="letter" /> Charlie
                </Label>
            </Flex>
            <Label>
                Why do you want to come?
                <Textarea placeholder="Write a few sentences." />
            </Label>
            <Label>
                Slider
                <Slider color="red" />
            </Label>
            <Button
                as="button"
                type="submit"
                children="RSVP"
                sx={{ gridColumn: [null, 'span 2'] }}
            />
            </Grid>
            <Heading variant="headline">Badges</Heading>
            {Object.keys(theme.badges).map(key => (
            <Badge
                key={key}
                variant={key}
                mr={3}
                color={key === 'outline' ? 'muted' : null}
            >
                {key}
            </Badge>
            ))}
            <Heading variant="headline">Colors</Heading>
        */}
        </Container>
    </Box>
</>
)

export default ExplorePage
