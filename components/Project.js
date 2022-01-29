import {
    Card, Box, Heading, Text
} from 'theme-ui'
import Icon from '@hackclub/icons'

export default function Project ({ url, icon, background, name, desc, children, image, author, ...props }) {
    return ( // stolen from https://github.com/hackclub/site/blob/main/pages/index.js#L95
        <Card
            as="a"
            href={url}
            variant="interactive"
            sx={{
            
            svg: { color: 'rgb(51, 142, 218)' },
            
            }}
            style={{
                padding: '0.75rem'
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
}