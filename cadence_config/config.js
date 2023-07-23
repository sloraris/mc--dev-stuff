const { ActivityType, PresenceUpdateStatus } = require('discord.js');
// Description: Config file for Cadence Discord bot.

// General options for information about the bot.
module.exports.botOptions = {
    name: 'Cadence',
    websiteUrl: 'Unknown',
    botInviteUrl: 'Unknown',
    serverInviteUrl: 'Unknown'
};

// Logging options for the bot, can set logging level to file and console separately.
module.exports.loggerOptions = {
    minimumLogLevel: 'debug',
    minimumLogLevelConsole: 'info'
};

// systemGuildIds: Array of guild ids where system commands should be available.
// systemMessageChannelId: Channel id where system messages should be sent, such as error events.
// systemUserId: User id of the system administrator, used for pining on certain system messages.
module.exports.systemOptions = {
    systemGuildIds: ['1063671645501407242'],
    systemMessageChannelId: '1114436168063393903',
    systemUserId: '858914004935639081'
};

// Options for presence/activity status. You can change from watching to listening, playing, etc.
// See https://discord-api-types.dev/api/discord-api-types-v10/enum/ActivityType for valid activity types.
// See https://discord-api-types.dev/api/discord-api-types-v10/enum/PresenceUpdateStatus for valid presence status.
module.exports.presenceStatusOptions = {
    status: PresenceUpdateStatus.Online,
    activities: [
        {
            name: 'crabrave',
            type: ActivityType.Listening
        }
    ]
};

// Options for embed messages, like colors and custom emojis.
module.exports.embedOptions = {
    colors: {
        success: '#23A55A',
        warning: '#F0B232',
        error: '#F23F43',
        info: '#5865F2',
        note: '#80848E'
    },
    icons: {	//Icons are green, actions are white or blue
        logo: '<:logo:1132006389011730502>',
        beta: '`beta`',
        new: '`new`',
        rule: '<:RULE_ICON:1131760820523651145>',
        support: '<:support:1132021045885419520>',
        bot: '<:BOT_ICON:1131760800420347934>',
        audioPlaying: '<a:audio_playing:1131994472071307465>',
        audioStartedPlaying: '<:AUDIO_PLAYING_SUCCESS:1131760160264695818>',
        success: '<:SUCCESS_ICON:1131760971925422161>',
        error: '<:error:1132022355657490452>',
        warning: '<:WARNING_ICON:1131760825732964572>',
        disable: '<:DISABLE_ICON:1132031792602427472>',
        enable: '<:ENABLE_ICON:1132031789939036271>',
        disabled: '<:DISABLED:1132143662906744922>',
        enabled: '<:ENABLED:1132143665347829833>',
        nextTrack: '<:NEXT_ICON_ACTION:1132043010524319744>',
        previousTrack: '<:PREVIOUS_ICON_ACTION:1131760817319182428>',
        pauseResumeTrack: '<:PAUSE_RESUME_ICON:1132030968681746555>',
        shuffleQueue: '<:SHUFFLE_ICON_ACTION:1132031607243558914>',
        loop: '<:LOOP_ICON:1132036935427309638>',
        loopAction: '<:LOOP_ICON_ACTION:1131760806980239421>',
        autoplay: '<:AUTOPLAY_ICON:1131760799287889920>',
        autoplayAction: '<:AUTOPLAY_ICON_ACTION:1131760796414775457>',
        looping: '<:LOOP_ICON_SUCCESS:1131760808456630313>',
        autoplaying: '<:AUTOPLAY_ICON_SUCCESS:1131760797404627005>',
        skipped: '<:NEXT_ICON_SUCCESS:1131760814873919498>',
        back: '<:PREVIOUS_ICON_SUCCESS:1132030602460266537>',
        pauseResumed: '<:PAUSE_RESUME_ICON_SUCCESS:1132030969860345977>',
        shuffled: '<:SHUFFLE_ICON_SUCCESS:1132031609772720343>',
        volume: '<:VOLUME_ICON:1132043786961297419>',
        volumeIsMuted: '<:VOLUME_ICON_MUTED:1132043784297910372>',
        volumeChanged: '<:VOLUME_ICON_SUCCESS:1132043782343376976>',
        volumeMuted: '<:VOLUME_ICON_MUTED_SUCCESS:1132043785627516978>',
        queue: '<:QUEUE_ICON:1132044589696553150>',
        sourceArbitrary: '<:QUEUE_ICON:1132044589696553150>',
        sourceAppleMusic: '<:apple_music:1131941581486817461>',
        sourceYouTube: '<:youtube:1131941578047492107>',
        sourceSoundCloud: '<:soundcloud:1131941579943329933>',
        sourceSpotify: '<:spotify:1131941140116013196>'
    }
};

// Options for the discord-player player.
module.exports.playerOptions = {
    leaveOnEmpty: true,
    leaveOnEmptyCooldown: 300000,
    leaveOnEnd: false,
    leaveOnEndCooldown: 300000,
    leaveOnStop: false,
    leaveOnStopCooldown: 300000,
    defaultVolume: 7,
    maxQueueSize: 1000,
    maxHistorySize: 100,
    progressBar: {
        length: 14,
        timecodes: false,
        separator: '┃',
        indicator: '<:DOT_COLORED0:1132045891986010162>',
        leftChar: '<:BAR_COLORED0:1132045895274332160>',
        rightChar: '<:BAR_GREY0:1132045893068132392>'
    }
};

// Options to be used by the ffmpeg, and available ffmpeg filters shown in filter commands.
module.exports.ffmpegFilterOptions = {
    threadAmount: '2',
    filterList: [
        {
            label: 'Bass boost',
            value: 'bassboost_low',
            description: 'Boost the bass of the audio.',
            emoji: '🔉'
        },
        {
            label: 'Bass boost high',
            value: 'bassboost',
            description: 'Boost the bass of the audio a lot.',
            emoji: '🔊'
        },
        {
            label: 'Night core',
            value: 'nightcore',
            description: 'Speed up the audio (higher pitch).',
            emoji: '🐱'
        },
        {
            label: 'Lo-fi',
            value: 'lofi',
            description: 'Low fidelity effect (lower quality).',
            emoji: '📻'
        },
        {
            label: 'Vaporwave',
            value: 'vaporwave',
            description: 'Slow down the audio (lower pitch).',
            emoji: '🌸'
        },
        {
            label: 'Ear rape',
            value: 'earrape',
            description: 'Extremely loud and distorted audio.',
            emoji: '👂'
        },
        {
            label: '8D',
            value: '8D',
            description: 'Simulate 8D audio effect (surround).',
            emoji: '🎧'
        },
        {
            label: 'Treble',
            value: 'treble',
            description: 'Increase the high frequencies.',
            emoji: '🎼'
        }
    ]
};
