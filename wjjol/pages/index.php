<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>王津津のCYBERSPACE</title>
	</head>
	<link rel="stylesheet" href="<?php $this->options->themeUrl('font/iconfont.css'); ?>">
	<link rel="stylesheet" href="<?php $this->options->themeUrl('index.css'); ?>">
	<link rel="stylesheet" href="<?php $this->options->themeUrl('response.css'); ?>">
	<body ondragstart="return false">

		<div class="title">
			<div class="title-item">
				<a id="_home" onclick="activate(this)">
					<span class="iconfont icon-home"></span>
					<span class="title-content">HOME</span>
				</a>
			</div>
			<div class="title-item">
				<a id="_potfolio" onclick="activate(this)">
					<span class="iconfont icon-potfolio"></span>
					<span class="title-content">POTFOLIO</span>
				</a>
			</div>
			<div class="title-item">
				<a id="_blog" onclick="activate(this)">
					<span class="iconfont icon-blog"></span>
					<span class="title-content">BLOG</span>
				</a>
			</div>
			<div class="title-item">
				<a id="_github" onclick="activate(this)">
					<span class="iconfont icon-github"></span>
					<span class="title-content">GITHUB</span>
				</a>
			</div>
			<div class="title-item">
				<a id="_tool" onclick="activate(this)">
					<span class="iconfont icon-tool"></span>
					<span class="title-content">TOOL</span>
				</a>
			</div>
			<div class="title-item">
				<a id="_diary" onclick="activate(this)">
					<span class="iconfont icon-diary"></span>
					<span class="title-content">DIARY</span>
				</a>
			</div>
			<div class="title-item">
				<a id="_contact" onclick="activate(this)">
					<span class="iconfont icon-contact"></span>
					<span class="title-content">CONTACT</span>
				</a>
			</div>
		</div>
		<div class="title-fold" id="title-fold">
			<span class="short-line top"></span>
			<span class="short-line middle"></span>
			<span class="short-line bottom"></span>
		</div>
		<div class="cover invisible">
			<div class="title-item-m">
				<a id="_home" onclick="activateMobile(this)">
					<span class="iconfont icon-home"></span>
					<span class="title-content">HOME</span>
				</a>
			</div>
			<div class="title-item-m">
				<a id="_potfolio" onclick="activateMobile(this)">
					<span class="iconfont icon-potfolio"></span>
					<span class="title-content">POTFOLIO</span>
				</a>
			</div>
			<div class="title-item-m">
				<a id="_blog" onclick="activateMobile(this)">
					<span class="iconfont icon-blog"></span>
					<span class="title-content">BLOG</span>
				</a>
			</div>
			<div class="title-item-m">
				<a id="_github" onclick="activateMobile(this)">
					<span class="iconfont icon-github"></span>
					<span class="title-content">GITHUB</span>
				</a>
			</div>
			<div class="title-item-m">
				<a id="_tool" onclick="activateMobile(this)">
					<span class="iconfont icon-tool"></span>
					<span class="title-content">TOOL</span>
				</a>
			</div>
			<div class="title-item-m">
				<a id="_diary" onclick="activateMobile(this)">
					<span class="iconfont icon-diary"></span>
					<span class="title-content">DIARY</span>
				</a>
			</div>
			<div class="title-item-m">
				<a id="_contact" onclick="activateMobile(this)">
					<span class="iconfont icon-contact"></span>
					<span class="title-content">CONTACT</span>
				</a>
			</div>

		</div>

		<div class="container">
			<div class="content">
				<div id="home" class="content-item-active ">
					<a href="#" onclick="slide(-1)">
						<div class="left-slider slider">

						</div>
					</a>
					<a href="#" onclick="slide(1)">
						<div class="right-slider slider">

						</div>
					</a>
					<div class="home">
						<img id="1_pic" src="<?php $this->options->themeUrl('img/home/1.jpg'); ?>" class="home-img">
						<img id="2_pic" src="<?php $this->options->themeUrl('img/home/2.jpg'); ?>" class="home-img">
						<img id="3_pic" src="<?php $this->options->themeUrl('img/home/3.jpg'); ?>"" class="home-img">
						<img id="4_pic" src="<?php $this->options->themeUrl('img/home/4.jpg'); ?>" class="home-img">
						<img id="5_pic" src="<?php $this->options->themeUrl('img/home/5.jpg'); ?>" class="home-img">
						<img id="6_pic" src="<?php $this->options->themeUrl('img/home/6.jpg'); ?>" class="home-img">
						<img id="7_pic" src="<?php $this->options->themeUrl('img/home/7.jpg'); ?>" class="home-img">
					</div>
				</div>

				<div id="potfolio" class="content-item">
					<div class="main">
						<div class="masonary">
							<div class="clumn">
								<div class="item">
									<div class="item__content">
										<img src="<?php $this->options->themeUrl('img/potfolio/richang.jpg'); ?>" style="width: 100%;height: auto;" loading="lazy">
										<div class="line">
											<span class="text">21 世 纪</span>
										</div>
										<div style="color: gray;">
											日 常
										</div>
										<hr class="pot-hr" />
									</div>
									<div class="item__content">
										<img src="<?php $this->options->themeUrl('img/potfolio/shenzhen.jpg'); ?>" style="width: 100%;height: auto;" loading="lazy">
										<div class="line">
											<span class="text">2019 年 8 月 11 日</span>
										</div>
										<div style="color: gray;">
											深 圳
										</div>
										<hr class="pot-hr" />
									</div>
									



								</div>
							</div>
							<div class="clumn">
								<div class="item">
									<div class="item__content">
										<img src="<?php $this->options->themeUrl('img/potfolio/dalian.jpg'); ?>" style="width: 100%;height: auto;" loading="lazy">
										<div class="line">
											<span class="text">2019 年 9 月 28 日</span>
										</div>
										<div style="color: gray;">
											大 连 · 旅 顺
										</div>
										<hr class="pot-hr" />
									</div>


									<div class="item__content">
										<img src="<?php $this->options->themeUrl('img/potfolio/weihai.jpg'); ?>" style="width: 100%;height: auto;" loading="lazy">
										<div class="line">
											<span class="text">2019 年 9 月 28 日</span>
										</div>
										<div style="color: gray;">
											威 海
										</div>
										<hr class="pot-hr" />
									</div>
									

								</div>
							</div>
						</div>
						<div class="masonary">
							<div class="clumn">
								<div class="item">
									<div class="item__content">
										<img src="<?php $this->options->themeUrl('img/potfolio/xinjiang.jpg'); ?>" style="width: 100%;height: auto;" loading="lazy">
										<div class="line">
											<span class="text">2020 年 1 月 15 日</span>
										</div>
										<div style="color: gray;">
											新 疆
										</div>
										<hr class="pot-hr" />
									</div>
									<div class="item__content">
										<img src="<?php $this->options->themeUrl('img/potfolio/shenzhenxiaoqu.jpg'); ?>" style="width: 100%;height: auto;" loading="lazy">
										<div class="line">
											<span class="text">2019 年 8 月 11 日</span>
										</div>
										<div style="color: gray;">
											深 圳 · 校 区
										</div>
										<hr class="pot-hr" />
									</div>
									

								</div>
							</div>
							<div class="clumn">
								<div class="item">
									<div class="item__content">
										<img src="<?php $this->options->themeUrl('img/potfolio/harbin.jpg'); ?>" style="width: 100%;height: auto;" loading="lazy">
										<div class="line">
											<span class="text">2017 年</span>
										</div>
										<div style="color: gray;">
											哈 尔 滨
										</div>
										<hr class="pot-hr" />
									</div>
									<div class="item__content">
										<img src="<?php $this->options->themeUrl('img/potfolio/xiamen.jpg'); ?>" style="width: 100%;height: auto;" loading="lazy">
										<div class="line">
											<span class="text">2017 年 8 月</span>
										</div>
										<div style="color: gray;">
											厦 门
										</div>
										<hr class="pot-hr" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div id="blog" class="content-item">
					blog
				</div>
				<div id="github" class="content-item">
					
				</div>
				<div id="tool" class="content-item" style="margin-top: -4.6rem;">
					<div class="kao-line">
						<div onclick="copyContent(this);" class="kaomoji-item">(oﾟ▽ﾟ)o </div>
						<div onclick="copyContent(this);" class="kaomoji-item">(ﾉﾟ▽ﾟ)ﾉ</div>
						<div onclick="copyContent(this);" class="kaomoji-item">(((o(*ﾟ▽ﾟ*)o)))♡</div>
						<div onclick="copyContent(this);" class="kaomoji-item">ヾ(◍°∇°◍)ﾉﾞ</div>
						<div onclick="copyContent(this);" class="kaomoji-item">(〃'▽'〃)</div>
						<div onclick="copyContent(this);" class="kaomoji-item">Ｏ(≧▽≦)Ｏ</div>
						<div onclick="copyContent(this);" class="kaomoji-item">(ﾉ≧∀≦)ﾉ</div>
						<div onclick="copyContent(this);" class="kaomoji-item">ヾ(✿ﾟ▽ﾟ)ノ</div>
						<div onclick="copyContent(this);" class="kaomoji-item">(*๓´╰╯`๓)</div>
						<div onclick="copyContent(this);" class="kaomoji-item">✧*｡٩(ˊᗜˋ*)و✧*｡</div>
						<div onclick="copyContent(this);" class="kaomoji-item">(๑´ㅂ`๑) </div>
						<div onclick="copyContent(this);" class="kaomoji-item">๑╹◡╹)ﾉ” </div>
						<div onclick="copyContent(this);" class="kaomoji-item">ヾ(๑╹◡╹)ﾉ"</div>
						<div onclick="copyContent(this);" class="kaomoji-item">(๑╹◡╹)ﾉ"""</div>
						<div onclick="copyContent(this);" class="kaomoji-item">ღゝ◡╹)ノ♡</div>
						<div onclick="copyContent(this);" class="kaomoji-item">ヽ(ﾟ∀ﾟ)ﾒ(ﾟ∀ﾟ)ﾉ </div>
						<div onclick="copyContent(this);" class="kaomoji-item">(ﾉﾟ∀ﾟ)ﾉ </div>
						<div onclick="copyContent(this);" class="kaomoji-item">(≧∀≦)♪</div>


					</div>

					<div class="kao-line">

						<div onclick="copyContent(this);" class="kaomoji-item">（づ￣3￣）づ╭❤～</div>

						<div onclick="copyContent(this);" class="kaomoji-item">(｡･ω･｡)ﾉ♡</div>
						<div onclick="copyContent(this);" class="kaomoji-item">(˘³˘)♡</div>
						<div onclick="copyContent(this);" class="kaomoji-item">(>ω･* )ﾉ</div>
						<div onclick="copyContent(this);" class="kaomoji-item">( • ̀ω•́ )✧</div>

						<div onclick="copyContent(this);" class="kaomoji-item">(๑＞ڡ＜)☆</div>
						<div onclick="copyContent(this);" class="kaomoji-item">(・ω<) </div> <div onclick="copyContent(this);" class="kaomoji-item">φ(>ω<*)
								 </div> <div onclick="copyContent(this);" class="kaomoji-item">(*/ω＼*)</div>
						<div onclick="copyContent(this);" class="kaomoji-item">(*･ω< ) </div> <div onclick="copyContent(this);" class="kaomoji-item">d(´ω｀*)</div>
						<div onclick="copyContent(this);" class="kaomoji-item">ヾ(=･ω･=)o</div>
						<div onclick="copyContent(this);" class="kaomoji-item"> (=´ω｀=)</div>
						<div onclick="copyContent(this);" class="kaomoji-item">=￣ω￣=</div>
						<div onclick="copyContent(this);" class="kaomoji-item">o(￣▽￣)ｄ </div>
						<div onclick="copyContent(this);" class="kaomoji-item">(๑╹っ╹๑)</div>
						<div onclick="copyContent(this);" class="kaomoji-item">ε = = (づ′▽`)づ </div>
						<div onclick="copyContent(this);" class="kaomoji-item">*✧⁺˚⁺ପ(๑･ω･)੭ु⁾⁾</div>
					</div>
					<div class="kao-line">
						<div onclick="copyContent(this);" class="kaomoji-item">(=ﾟωﾟ)ﾉ</div>
						<div onclick="copyContent(this);" class="kaomoji-item">∠( °ω°)／ </div>

						<div onclick="copyContent(this);" class="kaomoji-item"> щ(｀ω´щ)  </div>
						<div onclick="copyContent(this);" class="kaomoji-item">(*ﾉωﾉ)</div>
						<div onclick="copyContent(this);" class="kaomoji-item">(灬°ω°灬) </div>
						<div onclick="copyContent(this);" class="kaomoji-item">(o°ω°o)</div>

						<div onclick="copyContent(this);" class="kaomoji-item">(o´ω`o)ﾉ</div>
						<div onclick="copyContent(this);" class="kaomoji-item">(◍´꒳`◍)</div>
						<div onclick="copyContent(this);" class="kaomoji-item">ヾ(･ω･*)ﾉ</div>
						<div onclick="copyContent(this);" class="kaomoji-item">(❁´ω`❁)</div>
						<div onclick="copyContent(this);" class="kaomoji-item">＼＼\٩('ω')و//／／</div>
						<div onclick="copyContent(this);" class="kaomoji-item">(ﾟωﾟ)ﾉ☆ </div>
						<div onclick="copyContent(this);" class="kaomoji-item">(✪ω✪)</div>
						<div onclick="copyContent(this);" class="kaomoji-item">ヾ(*ΦωΦ)ツ</div>
						<div onclick="copyContent(this);" class="kaomoji-item">(｡･ω･｡)</div>
						<div onclick="copyContent(this);" class="kaomoji-item">(｀・ω・´)</div>
						<div onclick="copyContent(this);" class="kaomoji-item">ヾ(ｏ･ω･)ﾉ</div>
						<div onclick="copyContent(this);" class="kaomoji-item">('ω')</div>
					</div>
					<div class="kao-line">

						<div onclick="copyContent(this);" class="kaomoji-item">|･ω･｀)</div>
						<div onclick="copyContent(this);" class="kaomoji-item">|ू･ω･` )</div>
						<div onclick="copyContent(this);" class="kaomoji-item">|・ω・｀)</div>
						<div onclick="copyContent(this);" class="kaomoji-item">|´・ω・)ノ</div>

						<div onclick="copyContent(this);" class="kaomoji-item">(ฅ´ω`ฅ)</div>
						<div onclick="copyContent(this);" class="kaomoji-item">(ฅ'ω'ฅ)♪</div>
						<div onclick="copyContent(this);" class="kaomoji-item">(=｀ω´=)</div>
						<div onclick="copyContent(this);" class="kaomoji-item">(=①ω①=)</div>
						<div onclick="copyContent(this);" class="kaomoji-item">(●ↀωↀ●)✧</div>

						<div onclick="copyContent(this);" class="kaomoji-item">(｡・`ω´･)</div>
						<div onclick="copyContent(this);" class="kaomoji-item">─=≡Σ(((つ•̀ω•́)つ</div>

						<div onclick="copyContent(this);" class="kaomoji-item">⁄(⁄⁄•⁄ω⁄•⁄⁄)⁄</div>
						<div onclick="copyContent(this);" class="kaomoji-item">(〃ﾉωﾉ)</div>


						<div onclick="copyContent(this);" class="kaomoji-item">φ(≧ω≦*)♪ </div>
						<div onclick="copyContent(this);" class="kaomoji-item">(≧ω≦)/</div>
						<div onclick="copyContent(this);" class="kaomoji-item">(✧◡✧)</div>
						<div onclick="copyContent(this);" class="kaomoji-item">(ﾐ´ω`ﾐ)</div>
						<div onclick="copyContent(this);" class="kaomoji-item">罒ω罒</div>
					</div>
					<div class="kao-line">

						<div onclick="copyContent(this);" class="kaomoji-item">ψ(｀∇´)ψ</div>
						<div onclick="copyContent(this);" class="kaomoji-item">(#｀皿´)</div>
						<div onclick="copyContent(this);" class="kaomoji-item"> (*｀皿´*)ﾉ </div>
						<div onclick="copyContent(this);" class="kaomoji-item">ヽ(#`Д´)ﾉ</div>
						<div onclick="copyContent(this);" class="kaomoji-item">(╯>д<)╯⁽˙³˙⁾</div> <div onclick="copyContent(this);" class="kaomoji-item">(╯°Д°)╯</div>

						<div onclick="copyContent(this);" class="kaomoji-item">٩(๑`^´๑)۶</div>
						<div onclick="copyContent(this);" class="kaomoji-item">╰(‵□′)╯</div>
						<div onclick="copyContent(this);" class="kaomoji-item">o(≧口≦)o</div>
						<div onclick="copyContent(this);" class="kaomoji-item">(ŎдŎ；)</div>
						<div onclick="copyContent(this);" class="kaomoji-item">!!!∑(ﾟДﾟノ)ノ</div>
						<div onclick="copyContent(this);" class="kaomoji-item">Σ(っ°Д°;)っ</div>

						<div onclick="copyContent(this);" class="kaomoji-item">(꒪Д꒪)ノ</div>
						<div onclick="copyContent(this);" class="kaomoji-item"> ヽ(。>д<)ｐ</div> <div onclick="copyContent(this);" class="kaomoji-item">(*ﾟﾛﾟ)</div>
						<div onclick="copyContent(this);" class="kaomoji-item">ᓫ(°⌑°)ǃ</div>
						<div onclick="copyContent(this);" class="kaomoji-item">╭(๑´^`๑)╮​</div>

						<div onclick="copyContent(this);" class="kaomoji-item">(눈‸눈)</div>
					</div>
					<div class="kao-line">
						<div onclick="copyContent(this);" class="kaomoji-item">(｡-ω-)-ω-)-ω-)</div>
						<div onclick="copyContent(this);" class="kaomoji-item">Thanks♪(･ω･)ﾉ</div>
						<div onclick="copyContent(this);" class="kaomoji-item">(｀･ω･´)ゞ</div>
						<div onclick="copyContent(this);" class="kaomoji-item">(┌・ω・)┌✧</div>
						<div onclick="copyContent(this);" class="kaomoji-item">ヾ(￣▽￣)</div>
						<div onclick="copyContent(this);" class="kaomoji-item">Ψ(◉ཅ◉)Ψ</div>

						<div onclick="copyContent(this);" class="kaomoji-item">(ﾉﾟ0ﾟ)ﾉ~</div>
						<div onclick="copyContent(this);" class="kaomoji-item">(๑°⌓°๑)</div>
						<div onclick="copyContent(this);" class="kaomoji-item">o(´^｀)o</div>
						<div onclick="copyContent(this);" class="kaomoji-item">(o´罒`o)哼</div>

						<div onclick="copyContent(this);" class="kaomoji-item">(。-`ω´-)</div>
						<div onclick="copyContent(this);" class="kaomoji-item">(ﾒ｀ﾛ´)/</div>
						<div onclick="copyContent(this);" class="kaomoji-item">ψ(｀∇´)ψ</div>
						<div onclick="copyContent(this);" class="kaomoji-item">(｀∀´)Ψ</div>


						<div onclick="copyContent(this);" class="kaomoji-item">(ง˙o˙)ว</div>
						<div onclick="copyContent(this);" class="kaomoji-item">(╯°Д°)╯︵┻━┻</div>
						<div onclick="copyContent(this);" class="kaomoji-item">(╯°Д°)╯︵ /(.□ . \)</div>
					</div>
					<div class="kao-line">

						<div onclick="copyContent(this);" class="kaomoji-item">(Ｔ▽Ｔ)</div>
						<div onclick="copyContent(this);" class="kaomoji-item">〒▽〒</div>
						<div onclick="copyContent(this);" class="kaomoji-item"> o(TωT)o </div>
						<div onclick="copyContent(this);" class="kaomoji-item">(つД`)</div>

						<div onclick="copyContent(this);" class="kaomoji-item">(ﾉಥ益ಥ)</div>
						<div onclick="copyContent(this);" class="kaomoji-item">(ಥ_ಥ)</div>
						<div onclick="copyContent(this);" class="kaomoji-item">ಠ╭╮ಠ</div>
						<div onclick="copyContent(this);" class="kaomoji-item">｢(ﾟﾍﾟ)</div>
						<div onclick="copyContent(this);" class="kaomoji-item">>_<</div> <div onclick="copyContent(this);" class="kaomoji-item">|*´艸`*)</div>


						<div onclick="copyContent(this);" class="kaomoji-item">(˘•灬•˘)</div>
						<div onclick="copyContent(this);" class="kaomoji-item">——╬(´-灬-｀)</div>
						<div onclick="copyContent(this);" class="kaomoji-item">(￣ω￣;)</div>
						<div onclick="copyContent(this);" class="kaomoji-item">ヾ(´▽｀;)ゝ</div>
						<div onclick="copyContent(this);" class="kaomoji-item">∑(´△｀)？！</div>
						<div onclick="copyContent(this);" class="kaomoji-item">(゜-゜)</div>
						<div onclick="copyContent(this);" class="kaomoji-item">(•ิ_•ิ)?</div>
						<div onclick="copyContent(this);" class="kaomoji-item">(O_o)?? </div>
					</div>
					<div class="kao-line">
						<div onclick="copyContent(this);" class="kaomoji-item">(/ω＼)</div>
						<div onclick="copyContent(this);" class="kaomoji-item">(/｡＼)</div>
						<div onclick="copyContent(this);" class="kaomoji-item">｡：ﾟ(｡ﾉω＼｡)ﾟ･｡</div>

						<div onclick="copyContent(this);" class="kaomoji-item">(●°u°●)​</div>

						<div onclick="copyContent(this);" class="kaomoji-item">o(*////▽////*)q</div>
						<div onclick="copyContent(this);" class="kaomoji-item">╮(￣▽￣)╭</div>
						<div onclick="copyContent(this);" class="kaomoji-item">(*´▽｀*)</div>
						<div onclick="copyContent(this);" class="kaomoji-item">(´･ω･)ﾉ(._.`)</div>
						<div onclick="copyContent(this);" class="kaomoji-item">(｡･ω･)σ(´Д｀)</div>
						<div onclick="copyContent(this);" class="kaomoji-item">(,,´･ω･)ﾉ"(´っω･｀｡)</div>
						<div onclick="copyContent(this);" class="kaomoji-item">(σﾟ∀ﾟ)σ..:*☆ </div>
						<div onclick="copyContent(this);" class="kaomoji-item">ヽ(￣ω￣(￣ω￣〃)ゝ</div>

						<div onclick="copyContent(this);" class="kaomoji-item">(((*°▽°*)八(*°▽°*)))♪</div>
						<div onclick="copyContent(this);" class="kaomoji-item">☆-(ノﾟДﾟ)八(ﾟДﾟ )ノ</div>
						<div onclick="copyContent(this);" class="kaomoji-item">(｡･ω･)ﾉﾞ</div>
						<div onclick="copyContent(this);" class="kaomoji-item">(つω｀)～</div>
					</div>
					<div class="kao-line">
						<div onclick="copyContent(this);" class="kaomoji-item">(；OдO)</div>
						<div onclick="copyContent(this);" class="kaomoji-item">(´⊙ω⊙`)</div>
						<div onclick="copyContent(this);" class="kaomoji-item">ヾ(＠˘ω˘＠)ノ</div>
						<div onclick="copyContent(this);" class="kaomoji-item">(´-ωก`) </div>
						<div onclick="copyContent(this);" class="kaomoji-item">(:3_ヽ)_</div>
						<div onclick="copyContent(this);" class="kaomoji-item">_(:3」∠❀)_</div>
						<div onclick="copyContent(this);" class="kaomoji-item">_(¦3」∠)_</div>
						<div onclick="copyContent(this);" class="kaomoji-item">_(°ω°｣∠)_</div>
						<div onclick="copyContent(this);" class="kaomoji-item">∠(ᐛ」∠)＿</div>
						<div onclick="copyContent(this);" class="kaomoji-item">_(:D)∠)_</div>
						<div onclick="copyContent(this);" class="kaomoji-item">_(:3」∠)_</div>
						<div onclick="copyContent(this);" class="kaomoji-item">(¦3[____]</div>
						<div onclick="copyContent(this);" class="kaomoji-item">(。-ω-)zzz</div>
						<div onclick="copyContent(this);" class="kaomoji-item">(:[___]</div>
						<div onclick="copyContent(this);" class="kaomoji-item">m(._.)m</div>
						<div onclick="copyContent(this);" class="kaomoji-item">(∪｡∪)｡｡｡zzz</div>


					</div>
					<div class="kao-line">

						<div onclick="copyContent(this);" class="kaomoji-item">(づ●─●)づ</div>
						<div onclick="copyContent(this);" class="kaomoji-item">ლ(｀∀´ლ)</div>
						<div onclick="copyContent(this);" class="kaomoji-item">ლ(╹◡╹ლ)</div>
						<div onclick="copyContent(this);" class="kaomoji-item">ლ(⁰⊖⁰ლ)</div>
						<div onclick="copyContent(this);" class="kaomoji-item">(´-ι_-｀)</div>
						<div onclick="copyContent(this);" class="kaomoji-item">~Σ(●—●ﾉ)ﾉ</div>
						<div onclick="copyContent(this);" class="kaomoji-item">(づ ●─● )づ</div>
						<div onclick="copyContent(this);" class="kaomoji-item"> ●△● </div>
						<div onclick="copyContent(this);" class="kaomoji-item"> ●＿● </div>
						<div onclick="copyContent(this);" class="kaomoji-item"> ●▽● </div>
						<div onclick="copyContent(this);" class="kaomoji-item"> ●ω● </div>

						<div onclick="copyContent(this);" class="kaomoji-item">＿φ( °-°)/ </div>
						<div onclick="copyContent(this);" class="kaomoji-item">φ(．．)  </div>
						<div onclick="copyContent(this);" class="kaomoji-item"> ___ψ(‥ )</div>
						<div onclick="copyContent(this);" class="kaomoji-item">φ(°ρ°*)メ</div>
						<div onclick="copyContent(this);" class="kaomoji-item">ψ(。。)​</div>
						<div onclick="copyContent(this);" class="kaomoji-item">＿〆(。。)</div>

						<div onclick="copyContent(this);" class="kaomoji-item">(o_ _)o</div>
					</div>
					<input id="copy_content" type="text" value="" style="position: absolute;top: 0;left: 0;opacity: 0;z-index: -10;" />

					<div class="parent-tip">
						<div class="tip-rest" id="copy_tip">
							<span class="global-msg-tip">已复制</span>
						</div>
					</div>


				</div>
				<div id="diary" class="content-item">
					<div class="col-mb-12 col-8" id="main" role="main">
	<?php while($this->next()): ?>
              <article class="post" itemscope itemtype="http://schema.org/BlogPosting">
			<h2 class="post-title" itemprop="name headline"><?php $this->title() ?></h2>
			
            <div class="post-content" itemprop="articleBody">
    			<?php $this->content('- 阅读剩余部分 -'); ?>
            </div>
        </article>
	<?php endwhile; ?>

    
</div><!-- end #main-->
				</div>
				<div id="contact" class="content-item">
					contact
				</div>
			</div>

		</div>
	</body>
	<script>
		const $ = ele => typeof ele === "string" ? document.querySelector(ele) : "";
		const con = $(".title-fold");
		const cov = $(".cover");

		var nowActive = 1
		window.onload = function() {
			document.getElementById("_home").style.color = "black"
			activate(document.getElementById("_home"))
			autodivheight();
			var s = nowActive + "_pic"
			document.getElementById(s).className = "img-cur"


			if ("loading" in HTMLImageElement.prototype) {
				console.log("支持懒加载");

			} else {
				console.log("不支持懒加载，你可能需要引入懒加载库来实现懒加载");
			}

		}

		window.οnresize = autodivheight(); //浏览器窗口发生变化时同时变化DIV高度

		function autodivheight() { //函数：获取尺寸
			//获取浏览器窗口高度
			var winHeight = 0;
			if (window.innerHeight) {
				winHeight = window.innerHeight;
			} else if ((document.body) && (document.body.clientHeight)) {
				winHeight = document.body.clientHeight;
			}
			/* 
						//通过深入Document内部对body进行检测，获取浏览器窗口高度
						if (document.documentElement && document.documentElement.clientHeight) {
							winHeight = document.documentElement.clientHeight;
						} */
			//DIV高度为浏览器窗口的高度
			console.log(winHeight);
			var h = winHeight * 6 / 5 + "px";
			var h1 = document.getElementById("1_pic").clientHeight + "px";
			console.log(h + " " + h1);

			document.getElementById("home").style.height = h;
			document.getElementsByClassName("slider")[0].style.height = h1;
			document.getElementsByClassName("slider")[1].style.height = h1;
		}

		function activate(element) {

			var a = document.getElementsByClassName("title-item")
			var b = a.length
			for (var i = 0; i < b; i++) {
				a[i].querySelector("a").style.color = "#aaa"
			}
			element.style.color = "black"

			var s = element.id.slice(1)
			var x = document.getElementById(s)
			var p = x.parentNode.children
			var n = p.length
			for (var i = 0; i < n; i++) {
				p[i].className = "content-item"
			}
			x.className = "content-item-active"
		}

		function activateMobile(element) {

			var s = element.id.slice(1)
			var x = document.getElementById(s)
			var p = x.parentNode.children
			var n = p.length
			for (var i = 0; i < n; i++) {
				p[i].className = "content-item"
			}
			x.className = "content-item-active"

			cov.classList.remove("visible");
			cov.classList.add("invisible");
			con.classList.remove("container-click");
		}


		function slide(flag) {
			var s = nowActive + "_pic"
			var ele = document.getElementById(s)

			/* ele.style.opacity="0.8"
			
			setTimeout(function(){
				ele.style.display="none"
			},100);
			 */

			ele.className = "home-img"



			if (flag > 0) {
				nowActive++;
				if (nowActive == 8) {
					nowActive = 1
				}
				s = nowActive + "_pic"
				var elee = document.getElementById(s)

				elee.className = "img-cur"


				/* elee.style.display="block"
				setTimeout(function(){
					
					
					elee.style.opacity=1
				},100); */

			} else {
				nowActive--;
				if (nowActive == 0) {
					nowActive = 7
				}
				s = nowActive + "_pic"
				var elee = document.getElementById(s)

				elee.className = "img-cur"
				/* elee.style.display="block"
				setTimeout(function(){
					elee.style.opacity=1
				},200); */
			}
		}

		function copyContent(ElementObj) {
			//获取点击的值
			var clickContent = ElementObj.innerText;
			//获取要赋值的input的元素
			var inputElement = document.getElementById("copy_content");
			//给input框赋值
			inputElement.value = clickContent;
			//选中input框的内容
			inputElement.select();
			// 执行浏览器复制命令
			document.execCommand("Copy");
			//提示已复制
			showToast()

		}

		function showToast() { //消息弹出框
			var tip = document.getElementById('copy_tip')
			setTimeout(function() {
				tip.className = "tip-appear"
			}, 50);

			setTimeout(function() {
				tip.className = "tip-disappear"
			}, 300);
			tip.className = "tip-rest"


		}


		con.onmouseenter = () => con.classList.add("container-hover");
		con.onmouseleave = () => con.classList.remove("container-hover");

		con.onclick = () => {

			if (con.classList.contains("container-click")) {
				con.classList.remove("container-click");
			} else {
				con.classList.remove("container-hover");
				con.classList.add("container-click");
			}

			if (cov.classList.contains("visible")) {
				cov.classList.remove("visible");
				cov.classList.add("invisible");
			} else {
				$(".title-fold").style.zIndex = "11";
				cov.style.zIndex = "10";
				cov.classList.remove("invisible");
				cov.classList.add("visible");
			}

		}
	</script>







</html>
