import * as Mark from '../Mark';
import { type IconProps } from './';
import ArrowDown from './icons/arrow-down.svg';
import ArrowLeft from './icons/arrow-left.svg';
import ArrowRight from './icons/arrow-right.svg';
import ArrowTopRight from './icons/arrow-top-right.svg';
import ArrowUp from './icons/arrow-up.svg';
import Atom from './icons/atom.svg';
import Award from './icons/award.svg';
import Barcode from './icons/barcode.svg';
import Beef from './icons/beef.svg';
import Bell from './icons/bell.svg';
import Box from './icons/box.svg';
import Building from './icons/building.svg';
import c from 'clsx';
import Calendar from './icons/calendar.svg';
import CaretDown from './icons/caret-down.svg';
import CaretLeft from './icons/caret-left.svg';
import CaretRight from './icons/caret-right.svg';
import CaretUp from './icons/caret-up.svg';
import Cart from './icons/shopping-cart.svg';
import Chalkboard from './icons/chalkboard.svg';
import ChartLine from './icons/chart-line.svg';
import ChartPie from './icons/chart-pie.svg';
import Check from './icons/check.svg';
import CheckCircle from './icons/check-circle.svg';
import Chicken from './icons/chicken.svg';
import ClipboardCheck from './icons/clipboard-check.svg';
import Clock from './icons/clock.svg';
import Close from './icons/times.svg';
import Co2 from './icons/co2.svg';
import Cog from './icons/cog.svg';
import Comment from './icons/comment.svg';
import Copy from './icons/copy.svg';
import Day from './icons/day.svg';
import Download from './icons/download.svg';
import Egg from './icons/egg.svg';
import EllipsisHorizontal from './icons/ellipsis-horizontal.svg';
import EllipsisVertical from './icons/ellipsis-vertical.svg';
import Exchange from './icons/exchange.svg';
import Exclamation from './icons/exclamation.svg';
import ExclamationTriangle from './icons/exclamation-triangle.svg';
import Export from './icons/export.svg';
import Eye from './icons/eye.svg';
import Facebook from './icons/facebook.svg';
import Fish from './icons/fish.svg';
import Globe from './icons/globe.svg';
import Grid from './icons/grid.svg';
import Hamburger from './icons/hamburger.svg';
import Help from './icons/question.svg';
import HourglassHalf from './icons/hourglass-half.svg';
import Import from './icons/import.svg';
import Info from './icons/info.svg';
import Language from './icons/language.svg';
import LayerGroup from './icons/layer-group.svg';
import LifeRing from './icons/life-ring.svg';
import LightBulb from './icons/lightbulb.svg';
import LinkedIn from './icons/linkedin.svg';
import Lock from './icons/lock.svg';
import LockOpen from './icons/lock-open.svg';
import LogOut from './icons/log-out.svg';
import Microphone from './icons/microphone.svg';
import Middot from './icons/middot.svg';
import Minus from './icons/minus.svg';
import Night from './icons/night.svg';
import Note from './icons/sticky-note.svg';
import Pen from './icons/pen.svg';
import Pig from './icons/pig.svg';
import Plus from './icons/plus.svg';
import ProgressHorizontal from './icons/progress-horizontal.svg';
import ProgressVertical from './icons/progress-vertical.svg';
import React, { forwardRef } from 'react';
import Ruler from './icons/ruler.svg';
import Search from './icons/search.svg';
import SearchCo2 from './icons/search-co2.svg';
import SearchPlus from './icons/search-plus.svg';
import Seedling from './icons/seedling.svg';
import Select from './icons/select.svg';
import SelectAsc from './icons/select-asc.svg';
import SelectDesc from './icons/select-desc.svg';
import Share from './icons/share.svg';
import Skip from './icons/skip.svg';
import Star from './icons/star.svg';
import Sync from './icons/sync.svg';
import Tachometer from './icons/tachometer.svg';
import Tag from './icons/tag.svg';
import Tags from './icons/tags.svg';
import ThList from './icons/th-list.svg';
import Trash from './icons/trash.svg';
import Trophy from './icons/trophy.svg';
import Twitter from './icons/twitter.svg';
import User from './icons/user.svg';
import Users from './icons/users.svg';
import YouTube from './icons/youtube.svg';

export const Icon = forwardRef<HTMLSpanElement, IconProps>(
  ({ className, name, size = 'small', ...props }, forwardedRef) => {
    const classes = c(className, 'b-Icon', {
      [`b-Icon--${name}`]: name,
      '-size:l': size === 'large',
      '-size:s': size === 'small',
      '-size:xs': size === 'xSmall',
      '-size:xxs': size === 'xxSmall',
    });
    const n = name;

    if (!n) return null;

    return (
      <span className={classes} {...props} ref={forwardedRef}>
        {n === 'arrowDown' && <ArrowDown />}
        {n === 'arrowLeft' && <ArrowLeft />}
        {n === 'arrowRight' && <ArrowRight />}
        {n === 'arrowTopRight' && <ArrowTopRight />}
        {n === 'arrowUp' && <ArrowUp />}
        {n === 'atom' && <Atom />}
        {n === 'award' && <Award />}
        {n === 'barcode' && <Barcode />}
        {n === 'beef' && <Beef />}
        {n === 'bell' && <Bell />}
        {n === 'biocode' && <Mark.MarkBiocode unwrap />}
        {n === 'biocodeIcon' && <Mark.MarkBiocodeIcon unwrap />}
        {n === 'box' && <Box />}
        {n === 'building' && <Building />}
        {n === 'calendar' && <Calendar />}
        {n === 'caretDown' && <CaretDown />}
        {n === 'caretLeft' && <CaretLeft />}
        {n === 'caretRight' && <CaretRight />}
        {n === 'caretUp' && <CaretUp />}
        {n === 'cart' && <Cart />}
        {n === 'chalkboard' && <Chalkboard />}
        {n === 'chartLine' && <ChartLine />}
        {n === 'chartPie' && <ChartPie />}
        {n === 'check' && <Check />}
        {n === 'checkCircle' && <CheckCircle />}
        {n === 'chicken' && <Chicken />}
        {n === 'clipboardCheck' && <ClipboardCheck />}
        {n === 'clock' && <Clock />}
        {n === 'close' && <Close />}
        {n === 'co2' && <Co2 />}
        {n === 'cog' && <Cog />}
        {n === 'comment' && <Comment />}
        {n === 'copy' && <Copy />}
        {n === 'day' && <Day />}
        {n === 'download' && <Download />}
        {n === 'egg' && <Egg />}
        {n === 'ellipsisHorizontal' && <EllipsisHorizontal />}
        {n === 'ellipsisVertical' && <EllipsisVertical />}
        {n === 'exchange' && <Exchange />}
        {n === 'exclamation' && <Exclamation />}
        {n === 'exclamationTriangle' && <ExclamationTriangle />}
        {n === 'export' && <Export />}
        {n === 'eye' && <Eye />}
        {n === 'facebook' && <Facebook />}
        {n === 'fish' && <Fish />}
        {n === 'globe' && <Globe />}
        {n === 'grid' && <Grid />}
        {n === 'hamburger' && <Hamburger />}
        {n === 'help' && <Help />}
        {n === 'hourglassHalf' && <HourglassHalf />}
        {n === 'import' && <Import />}
        {n === 'info' && <Info />}
        {n === 'language' && <Language />}
        {n === 'layerGroup' && <LayerGroup />}
        {n === 'lightBulb' && <LightBulb />}
        {n === 'lifeRing' && <LifeRing />}
        {n === 'linkedIn' && <LinkedIn />}
        {n === 'lock' && <Lock />}
        {n === 'lockOpen' && <LockOpen />}
        {n === 'logOut' && <LogOut />}
        {n === 'microphone' && <Microphone />}
        {n === 'middot' && <Middot />}
        {n === 'minus' && <Minus />}
        {n === 'night' && <Night />}
        {n === 'note' && <Note />}
        {n === 'pen' && <Pen />}
        {n === 'pig' && <Pig />}
        {n === 'plus' && <Plus />}
        {n === 'producer' && <Mark.MarkProducer unwrap />}
        {n === 'producerMuted' && <Mark.MarkProducerMuted unwrap />}
        {n === 'product' && <Mark.MarkProduct unwrap />}
        {n === 'productMuted' && <Mark.MarkProductMuted unwrap />}
        {n === 'progressHorizontal' && <ProgressHorizontal />}
        {n === 'progressVertical' && <ProgressVertical />}
        {n === 'report' && <Mark.MarkReport unwrap />}
        {n === 'reportMuted' && <Mark.MarkReportMuted unwrap />}
        {n === 'reportSmall' && <Mark.MarkReportSmall unwrap />}
        {n === 'reportSmallMuted' && <Mark.MarkReportSmallMuted unwrap />}
        {n === 'ruler' && <Ruler />}
        {n === 'search' && <Search />}
        {n === 'searchCo2' && <SearchCo2 />}
        {n === 'searchPlus' && <SearchPlus />}
        {n === 'seedling' && <Seedling />}
        {n === 'select' && <Select />}
        {n === 'selectAsc' && <SelectAsc />}
        {n === 'selectDesc' && <SelectDesc />}
        {n === 'share' && <Share />}
        {n === 'skip' && <Skip />}
        {n === 'star' && <Star />}
        {n === 'sync' && <Sync />}
        {n === 'tachometer' && <Tachometer />}
        {n === 'tag' && <Tag />}
        {n === 'tags' && <Tags />}
        {n === 'thList' && <ThList />}
        {n === 'trash' && <Trash />}
        {n === 'trophy' && <Trophy />}
        {n === 'twitter' && <Twitter />}
        {n === 'user' && <User />}
        {n === 'users' && <Users />}
        {n === 'youTube' && <YouTube />}
      </span>
    );
  },
);
