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


const Project = ({ url, icon, background, name, desc, children, image, author, ...props }) => ( // stolen from https://github.com/hackclub/site/blob/main/pages/index.js#L95

    <Card
        as="a"
        href={url}
        variant="interactive"
        sx={{
        
        svg: { color: 'rgb(51, 142, 218)' }
        }}
        style={{
            padding: '0.5rem'
        }}
    >
        <Box {...props}>
        <Box>
            <img src={image} alt={name} style={{ width: '100%', maxHeight: '500px', borderRadius: '9px' }} />
            <Heading as="h3" variant="headline" mb={2} style={{ marginTop: '5px' }}>
            {name}
            </Heading>
            <Text
            as="p"
            sx={{ mt: 0, pb: 2, a: { variant: 'styles.a', color: 'blue' } }}
            >
            {desc}
            </Text>
        </Box>
        {children || (
            <>
            <Box
            as="span"
            sx={{
                width: 'fit-content',
                bg: background,
                borderRadius: 9,
                lineHeight: 0,
                p: 2,
                mb: 1,
                display: 'inline-block',
                transform: ['scale(0.75)', 'none'],
                transformOrigin: 'bottom left',
                boxShadow:
                'inset 2px 2px 6px rgba(255,255,255,0.2), inset -2px -2px 6px rgba(0,0,0,0.1), 0 1px 4px rgba(0,0,0,0.1), 0 4px 8px rgba(0,0,0,0.1)'
            }}
            >
            <Icon glyph="mention" size={24} />
            </Box>
            <Heading as="h3" variant="subheadline" mb={2} style={{ display: 'inline-block', verticalAlign: 'super', margin: '10px' }}>{author || 'Orpheus'}</Heading>
            </>
        )}
        </Box>
    </Card>
);

const DocsPage = () => (
<>
    <Head>
    <title>Hack Club Explore</title>
    <Meta
        name="Explore"
        description="Explore the amazing mini-projects that Hack Clubbers have created."
    />
    </Head>
    <Box as="header" sx={{ bg: 'sheet', color: 'text' }}>
    <Container sx={{ pt: 5, pb: [3, 4], textAlign: 'center' }}>
        <ColorSwitcher />
        <Heading as="h1" variant="title" color="red">
        <Icon glyph="explore" size={64} style={{ verticalAlign: 'bottom' }} /> Hack Club Explore
        </Heading>
        <Text as="p" variant="subtitle" mt={3}>
        Explore mini-projects made with <Link href="https://github.com/hackclub/game-lab/">Game Lab</Link> and <Link href="https://github.com/hackclub/muse/">Muse</Link>.
        </Text>
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
        <NavLink href="https://hackclub.com">Hack Club</NavLink>
        <NavLink href="#">
            Link 2
        </NavLink>
        <NavLink href="#">
            Link 3
        </NavLink>
        </Grid>
    </Container>
    </Box>
    <Box
    as="main"
    sx={{ bg: 'background', color: 'text', py: 4, h2: { mt: 4 } }}
    >
    <Container variant="wide">
        <Heading variant="title" style={{ textAlign: 'center' }}>Featured</Heading>
        <br />
        <Grid
        columns={[null, 2, 3]}
        gap={3}
        sx={{ code: { mt: 1, ml: -1, fontSize: 0 } }}
        >
        
        <Project
            icon="send"
            background="white"
            name="Pong-Ish"
            desc="It's kind of linke pong (ish)."
            image="https://user-images.githubusercontent.com/27078897/149371012-faf3e45f-9d3a-47d4-831b-566d9171d2bd.gif"
            url="https://hackclub.github.io/game-lab/?file=recZMaBjgnNXgZsUK"
            author="Leo"
        />
        
        <Project
            icon="send"
            background="white"
            name="Crappy Birds"
            desc="A game about birds."
            image="https://user-images.githubusercontent.com/27078897/149380918-a1855ab3-cc2d-4a9a-adc0-d5316d6f17ba.gif"
            url="https://hackclub.github.io/game-lab/?file=recJX7dAboz7v1OFG"
            author="Leo"
        />
        
        <Project
            icon="send"
            background="white"
            name="Brick Broken"
            desc="A game about bricks. (Or, tomatoes? No, wait, apples.)"
            image="https://user-images.githubusercontent.com/27078897/150606449-5b73d7fe-f2d3-432f-9cc5-346c20919ec8.gif"
            url="https://hackclub.github.io/game-lab/?file=rec6bdF7IS7vY7xzl"
            author="Leo"
        />

        </Grid>
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
    </Container>
    </Box>
</>
)

export default DocsPage