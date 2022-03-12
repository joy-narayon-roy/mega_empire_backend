const coc = require("../../hooks/useCoc");

function seasonInf(req, res) {
  let data = {
    season: false,
    position: NaN,
    stars: 0,
    destruction: 0,
  };

  let { tag } = req.params;
  tag = "#" + tag;

  coc
    .clanLeague(tag)
    .then((response) => {
      data.season = new Date(response.season).toLocaleString("en-US", {
        month: "long",
      });

      // For Position
      response.clans.forEach((clan, ind) => {
        if (clan.tag === tag) {
          data.position = ind++;
        }
      });
      // For Stars
      response.rounds.forEach((round) => {
        round.warTags.forEach((warTag) => {
          coc
            .clanLeagueWars(warTag)
            .then((resp) => {
              if (resp.clan.tag === tag) {
                console.clear();
                console.log(resp);
                data.stars = data.stars + resp.stars;
                data.destruction =
                  data.destruction + resp.destructionPercentage;
              }
            })
            .catch((err) => console.log(err));
        });
        res.status(200).json({ response, data });
      });
    })
    .catch((err) => {
      res.status(400).json({
        message: "Error! In war league war log.",
      });
    });
}

async function seasonInfo(req, res) {
  let data = {
    season: false,
    position: NaN,
    stars: 0,
    destruction: 0,
  };

  let { tag } = req.params;
  tag = "#" + tag;

  try {
    console.clear();
    let leagueGroups = await coc.clanLeague(tag);
    data.season = new Date(leagueGroups.season).toLocaleString("en-US", {
      month: "long",
    });

    leagueGroups.clans.forEach((clan, index) => {
      if (clan.tag === tag) {
        data.position = index + 1;
      }
    });

    // leagueGroups.rounds.forEach((round) => {
    //   round.warTags.forEach(async (warTag) => {
    //     let warInfo = await coc.clanLeagueWars(warTag);
    //     if (warInfo.clan.tag === tag) {
    //       data.stars = data.stars + warInfo.stars;
    //       data.destruction = data.destruction + warInfo.destructionPercentage;
    //     }
    //   });
    // });

    for (let i = 0; i < leagueGroups.rounds.length; i++) {
      for (let j = 0; j < leagueGroups.rounds[i].warTags.length; j++) {
        let warInfo = await coc.clanLeagueWars(
          leagueGroups.rounds[i].warTags[j]
        );
        if (warInfo.clan.tag === tag) {
          data.stars = data.stars + warInfo.clan.stars;
          data.destruction =
            data.destruction + warInfo.clan.destructionPercentage;
        }
        if (warInfo.opponent.tag === tag) {
          data.stars = data.stars + warInfo.opponent.stars;
          data.destruction =
            data.destruction + warInfo.opponent.destructionPercentage;
        }
      }
    }

    res.json(data);
  } catch (err) {
    console.clear();
    console.log(err);
    res.status(400).json(err.message);
  }
}
module.exports = seasonInfo;
